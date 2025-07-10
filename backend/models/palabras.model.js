//Importar un modelo y esquema (tipo funcion de mongo)
import {Schema, model} from "mongoose";

//El "estilo" de la tabla 
const EsquemaPalabras = new Schema({
    name: String,
    age: Number
})

//Crear la tabla con nombre de la misma.
export const modeloPalabras = new model("Palabras", EsquemaPalabras);