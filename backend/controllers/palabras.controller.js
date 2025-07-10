//Importar un modelo desde otra carpeta
import { modeloPalabras } from "../models/palabras.model.js";

//Valores que se usaran para la tabla a crear (objetos o parametros)
modeloPalabras.create({
    name:"Palabra1",
    edad:1
})

//Exportar la constante test para mostrar que funciona el "llamado"
export const test = () =>{
    console.log("Llamando al controlador")
}