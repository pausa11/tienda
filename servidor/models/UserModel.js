import db from "../database/db.js";             //se importa la base de datos para extraer info

import { DataTypes } from "sequelize";          //tipo de dato extraido de la base de datos

//El modelo de todos los usuarios extrayendo todos sus campos
const UserModel = db.define ('users',{          //se define el modelo de los usuarios
    user_name: {type: DataTypes.STRING},        //se define el nombre de usuario como un string
    password: {type: DataTypes.STRING},         //se define la contrasena como un string
    adress: {type: DataTypes.STRING},           //se define la direccion como un string
    telephone: {type: DataTypes.STRING},        //se define el telefono como un string
    email: {type: DataTypes.STRING},            //se define el correo como un string
});

export default UserModel;                       //se exporta el modelo de los usuarios para poder usarlo en otros archivos