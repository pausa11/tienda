import express from "express";                      //Se importa express para facilitar la comunicacion con el servidor
import { getAllUsers, createUser, updateUser, getUser } from "../controllers/UserController.js";//obteniendo todos los controladores ya creados para ser usados
const router = express.Router();
//generacion de rutas para usa la api creada para interactuar con la base de datos
//diferentes rutas a usar con las diferentes funcionalidades
router.get('/', getAllUsers)                        //se usa para obtener todos los usuarios
router.get('/:id', getUser)                         //se usa para obtener un usuario en especifico
router.post('/', createUser)                        //se usa para crear un usuario
router.put('/:id', updateUser)                      //se usa para actualizar un usuario       

export default router;                              //se exporta el router para poder usarlo en otros archivos