import mongoose from "mongoose";

const collection = 'Chats';

const schema = new mongoose.Schema({
    author: {
        id: String,
        nombre: String,
        apellido: String,
        edad: Number,
        alias: String,
        avatar: String
    },
    text: String
}
, { versionKey: false });

const userModel = mongoose.model(collection, schema);

export default userModel;