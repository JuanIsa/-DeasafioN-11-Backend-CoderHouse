'use strict';
import express from 'express';
import productosRoute from './routes/productos.js';
import carritoRoute from './routes/carrito.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { PRODUCTS } from './dao/fackerData/facker.js';
import Chats from './dao/mongodb/handlerChats.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 8080;

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cors())

//ROUTES
app.use('/api/productos', productosRoute);
app.use('/api/carrito', carritoRoute);

//USO DE FACKER JS PARA 5 PRODUCTOS RANDOM
app.get('/api/productos-test', (req, res) => {
    res.send(PRODUCTS);
});

//MENSAJES NORMALIZADOS
const archivo = new Chats('chats');

app.get('/api/messages', (req, res) => {
    archivo.getAll().then(dataFile => res.send(dataFile));
});

//RUTA 404
app.use('*', (req, res) => {
    res.status(404).json({ error: -2, descripcion: `ruta:${req.url}`, método: `${req.method} no implementado.`});
});



//ESCUCHA DEL SERVER
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}.`);
});