import nodemailer from 'nodemailer';                //se improta la libreria nodemailer que permite el facil envio de correo

//El transportador, simplemente una receta de cocina en la cual SMTP protocolo simple de transferencia de correo
const transporter = nodemailer.createTransport({    //se crea el transportador
    host: 'smtp.gmail.com',                         //se usa el host de gmail
    port: 587,                                      //se usa el puerto 587            
    auth: {                                         //se usa la autenticacion                        
        user: 'daniel.toro1@utp.edu.co',            //se usa el correo de gmail
        pass: 'Meamo012020'                         //se usa la contrasena del correo           
    }
});

//funcion que envia el correo con el contenido usando la libreria de mailer

export const sendMail = prod => {                   //se exporta la funcion sendMail               
    transporter.sendMail({                          //se usa el transportador para enviar el correo       
        from: "ecommerce <bootcarutp@gmail.com>",   //se usa el correo de gmail
        to: "daniel.toro1@utp.edu.co",              //se usa el correo de la persona a la que se le enviara el correo
        subject: "Stock at its minimun",            //se usa el asunto del correo
        text: `The following product's stock which id's is${prod.id}. is almost empty`  //se usa el texto del correo
    }).then(console.info)                           //se usa el then para mostrar la informacion en consola
    .catch(console.catch)                           //se usa el catch para mostrar el error en consola
}


