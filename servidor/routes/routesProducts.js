import express from "express";          //Se importa express para facilitar la comunicacion con el servidor
import { bookProduct, buyProducts,getAllProducts,getProduct,createProduct,updateProducts,deleteProduct } from "../controllers/ProductControllers.js";//obteniendo todos los controladores ya creados para ser usados
const router = express.Router();        //se crea el router para poder usarlo en la aplicacion


//generacion de rutas para usa la api creada para interactuar con la base de datos
//diferentes rutas a usar con las diferentes funcionalidades
router.get('/', getAllProducts)         //se usa para obtener todos los productos
router.put('/buy', buyProducts)         //se usa para comprar productos
router.get('/book/:id', bookProduct)    //se usa para reservar productos
router.get('/:id', getProduct)          //se usa para obtener un producto en especifico
router.post('/', createProduct)         //se usa para crear un producto
router.put('/:id', updateProducts)      //se usa para actualizar un producto
router.delete('/:id', deleteProduct)    //se usa para eliminar un producto

export default router;                  //se exporta el router para poder usarlo en otros archivos
