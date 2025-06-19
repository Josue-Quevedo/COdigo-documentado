import {Schema, model} from "mongoose";

const EsquemaPalabras = new Schema({
    name: String,
    age: Number
})

export const modeloPalabras = new model("Palabras", EsquemaPalabras);