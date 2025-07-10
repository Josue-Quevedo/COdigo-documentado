// Importar dependencias
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// Improtar "test" desde otra carpeta
import { test } from "./backend/controllers/palabras.controller.js"

// Conexion con mongodb
dotenv.config();
mongoose.connect(process.env.urlbd)
//Funcion flecha para detectar errores o mostrar que todo jala
.then(()=>{
    console.log("Funciona la conexion a la base de datos")
})
//FUncion para "cachar" errores
.catch((error)=>{
    console.log("No jalo", error)
})

// Constante para un servidor y segurirad del mismo, tambien usar un puerto para la conexion
const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Escuchando al servidor")
})
test();