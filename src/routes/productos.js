'use strict';
import { Router } from 'express';
import BBDD from '../dao/index.js';


const productosRoute = Router();
let archivo;

BBDD
    .then(data => {
        archivo = new data.default('productos.txt');
    })
    .catch(err => console.log(err))

//MIDLEWARE de protección de rutas.
const authEndpoints = (req, res, next) => {
    if (req.headers.administrador) {
        JSON.parse(req.headers.administrador) ? next() : res.status(401).json({ error: 'no autorizado', descripcion: `ruta:${req.url}`, método: `${req.method}`, statusCode: 401 })
    } else {
        res.status(401).json({ error: 'no autorizado', descripcion: `ruta:${req.url}`, método: `${req.method}`, statusCode: 401 })
    }
}


//Obtener la lista completa de archivos.
productosRoute.get('/', (req, res) => {
    archivo.getAll().then(dataFile => res.send(dataFile));
});

//Obtener registro por ID.
productosRoute.get('/:id', (req, res) => {
    archivo.getById(req.params.id).then(dataFile => res.send(dataFile));
});

//Ingresar un registro nuevo.
productosRoute.post('/', authEndpoints, (req, res) => {
    archivo.save(req.body).then(dataFile => res.send(dataFile));
});

//Modificar un registro por ID.
productosRoute.put('/:id', authEndpoints, (req, res) => {
    archivo.updateById(req.params.id, req.body).then(dataFile => res.send(dataFile));
});

//Borrar un registro  por ID.
productosRoute.delete('/:id', authEndpoints, (req, res) => {
    archivo.deleteById(req.params.id).then(dataFile => res.send(dataFile));
});

export default productosRoute;
