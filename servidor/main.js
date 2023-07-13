import Express from 'express';                          //conexion con la api
import cors from 'cors';                                //Intercambio de recursos de origen cruzado, permite evitar errores
import db from './database/db.js';                      //conexion base de datos
import productRoutes from './routes/routesProducts.js'; //rutas de los productos
import userRoutes from './routes/routesUser.js';        //rutas de los usuarios
import ProductModel from './models/ProductModel.js';    //modelo de los productos
import {pay} from './routes/pay.js';                    //ruta para pagar
const app = Express();                                  //la app se conecta con express y se usan sus funciones

app.use(cors());                                        //prevenir fallas de conexion
app.use(Express.json());                                //permite obtener el paquete express en un json
app.use('/products', productRoutes);                    //se generalizan las rutas de los productso
app.use('/users', userRoutes);                          //se generalizan las rutas de los usuarios
app.use('/payment',pay);                                //se generalizan las rutas de los pagos


try {                                                   //try catch para evitar errores de conexion
    db.authenticate()                                   //se autentica la conexion por medio de sequelize y su funcion authenticate
    console.log('conexion exitosa a la bd');            //si se conecta, se muestra el mensaje
} catch (error) {                                       //si no se conecta, se muestra el error            
    console.log(`el error de conexion fue ${error}`);   //se muestra el error
}

const PORT = process.env.PORT || 3001;                  //conexion al servidor backend en el puerto 3001 o en el puerto que se le asigne process.env.PORT que es el puerto que le asigne a render

app.listen(PORT, ()=>{                                  //app.listen para que el servidor escuche en el puerto que se le asigno                                
    console.log(`server running on port ${PORT}`);      //info de donde esta corriendo el servidor
})

//usando el modelo de productos, encuentra a todos los productos y devuelve sus correspondientes atributos y se guarda en el objeto en products
const products = await ProductModel.findAll({           //constante que guarda todos los productos de la base de datos por medio de la funcion findAll de sequelize
    attributes: ['id', 'stock', 'stockMin', 'nombre']   //se obtienen los atributos de id, stock, stockMin y nombre de los productos de la base de datos
})

let productsStock = {}                                  //objeto para guardar el stock de los productos
let productMinStock = {}                                //objeto para guardar el stock minimo de los productos

//para cada producto obtenido, 
products.forEach(product => {                           //se le asigna el id correspondiente al producto y a su vez el valor del stock en forma de objeto
    productsStock[product.dataValues.id] = product.dataValues.stock;//se le asigna el id correspondiente al producto y a su vez el valor del stock en forma de objeto
});
products.forEach(product => {                           //para cada producto obtenido,
    productMinStock[product.dataValues.id] = {stockMin: product.dataValues.stockMin, nombre: product.dataValues.nombre};//se le asigna el id correspondiente al producto y a su vez el valor minimo del stock en forma de objeto, junto con el nomrbre
});
console.log(productMinStock);                           //se muestra el objeto de los productos con su stock minimo
export {productsStock, productMinStock};                //exportation de los objetos

