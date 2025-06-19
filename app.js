import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/palabras.controller.js"

dotenv.config();
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Funciona la conexion a la base de datos")
})
.catch((error)=>{
    console.log("No jalo", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Escuchando al servidor")
})
test();