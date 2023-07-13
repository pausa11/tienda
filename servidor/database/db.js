/*Este código muestra la configuración y la conexión a una base de datos MySQL utilizando la biblioteca Sequelize en una aplicación MERN (MongoDB, Express, React, Node.js).
En primer lugar, se importa la clase Sequelize de la biblioteca Sequelize. 
Sequelize es un ORM (Object-Relational Mapping) de Node.js que proporciona una interfaz para interactuar con 
bases de datos relacionales como MySQL, PostgreSQL, SQLite, etc.*/

import { Sequelize } from 'sequelize';                  //Importa la libreria sequelize        

/*'bens2xdjwchsy8i0f3sh' es el nombre de la base de datos a la que se desea conectar.
'uyzmw71ctrfty7y7' es el nombre de usuario utilizado para acceder a la base de datos.
'4oIba9VvUJLSfcTOO2Y7' es la contraseña asociada al usuario.
'bens2xdjwchsy8i0f3sh-mysql.services.clever-cloud.com' es la dirección del host de la base de datos.*/

//Se conecta a la base de datos usando sequlize, con los parametros de esta misma "nombre base de datos" "usuario" "constrasena"
const db = new Sequelize('bens2xdjwchsy8i0f3sh', 'uyzmw71ctrfty7y7', '4oIba9VvUJLSfcTOO2Y7', {  
    host:'bens2xdjwchsy8i0f3sh-mysql.services.clever-cloud.com',
    dialect:'mysql'
});

export default db;                                      //Exporta la base de datos para poder usarla en otros archivos                  