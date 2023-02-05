import mongoose from 'mongoose';
import userModel from './models/modelChats.js';

import { normalize, denormalize, schema } from 'normalizr';


mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Sharvelion:nauj7895214@clusterdepruebajts.ysnbgix.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Conectado a base de datos mongo atlas chats.'))
    .catch


class Chats {
    constructor(nameFile) {
        this.nameFile = nameFile;
    }
    async getAll() {
        const dataFromDB = await userModel.find();
        const dataNormalizr = {
            id: 100,
            messages: dataFromDB
        }
        const user = new schema.Entity('user');
        const comment = new schema.Entity('comment', {
            author: user
        });
        const chats = new schema.Entity('chats', {
            chats: [comment]
        });
        const dataNormalizada = normalize(dataNormalizr, chats);
        console.log('---------------------------------------------------------------------------------------')
        console.log('Cantidad de chats: ' + dataFromDB.length);
        console.log('Tamaño de los datos sin normalizar: ' + JSON.stringify(dataFromDB).length + ' caracteres.');
        console.log('Tamaño de los datos normalizados: ' + JSON.stringify(dataNormalizada).length + ' caracteres.') ;
        console.log('---------------------------------------------------------------------------------------')
        //console.log(JSON.stringify(dataNormalizada, null,'\t'));

        if (JSON.stringify(dataNormalizada).length > JSON.stringify(dataFromDB).length) {
            const porcentaje = ((JSON.stringify(dataNormalizada).length / JSON.stringify(dataFromDB).length) - 1) * 100;
            console.log(`Empeoraste la transmisión de datos en un ${porcentaje.toFixed(2)} % sobre el peso total de los datos.`);
        } else {
            const porcentaje = 100-(JSON.stringify(dataNormalizada).length *100/ JSON.stringify(dataFromDB).length) ;
            console.log(`Mejoraste la transmisión de datos en un ${porcentaje.toFixed(2)} % sobre el peso total de los datos.`);
        }
        return dataNormalizr;
    }
}

export default Chats;