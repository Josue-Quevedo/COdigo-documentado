import { modeloPalabras } from "../models/palabras.model.js";

modeloPalabras.create({
    name:"Palabra1",
    edad:1
})

export const test = () =>{
    console.log("Llamando al controlador")
}