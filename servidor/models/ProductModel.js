import db from "../database/db.js";         //se busca conectarse a la base de datos

import { DataTypes } from "sequelize";      //Tipo de datos para cada atributo de la base de datos

//El modelo de todos los productos extrayendo todos sus campos
const ProductModel = db.define ('productos',{   
    nombre: {type: DataTypes.STRING},       //se define el nombre como un string
    precio: {type: DataTypes.NUMBER},       //se define el precio como un numero          
    descripcion: {type: DataTypes.TEXT},    //se define la descripcion como un texto
    img1: {type: DataTypes.TEXT},           //se define la imagen 1 como un texto
    img2: {type: DataTypes.TEXT},           //se define la imagen 2 como un texto       
    img3: {type: DataTypes.TEXT},           //se define la imagen 3 como un texto
    stockMax: {type: DataTypes.INTEGER},    //se define el stock maximo como un numero entero      
    stockMin: {type: DataTypes.INTEGER},    //se define el stock minimo como un numero entero     
    stock: {type: DataTypes.INTEGER}        //se define el stock como un numero entero
});

export default ProductModel;                //se exporta el modelo de los productos para poder usarlo en otros archivos