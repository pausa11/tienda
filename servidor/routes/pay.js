import Stripe from "stripe";                        //portal de pagos para conectarse a su api
const striper = Stripe('sk_test_51NS6EDDJIqV1atJZ47vPf4v2uaHK32Bxm2u9HWaITyCZ9P7xQWgEvlBd47jtNqDq08ukmaWfvXC0spvpt6oSuOs800TytUznzc');//clave de acceso stripe para recibir el pago

//funcion que permite conectarse a la api y realizar los pagos
export const pay = async (req,res) => {             //se exporta la funcion pay para poder usarla en otros archivos
    let {amount, id} = req.body                     //se extrae el monto y el id del cuerpo de la peticion
    try {                                           //se intenta realizar el pago              
        const payment = await striper.paymentIntents.create({   //se crea el pago
            amount ,                               //se usa el monto
            currency: 'COP',                        //se usa la moneda
            description: 'shop',                    //se usa la descripcion
            payment_method: id,                     //se usa el metodo de pago
            confirm: true                           //se confirma el pago        
        })

        console.log('payment', payment);            //se imprime el pago
        res.json({                                  //se retorna el pago      
            message: 'payment succesful',           //se retorna el mensaje de pago exitoso
            succes: true                            //se retorna el estado de exito
        })
    } catch (error) {                               //si no se puede realizar el pago se imprime el error
        console.log('error', error);                //se imprime el error
        res.json({                                  //se retorna el error
            message:'payment failed',               //se retorna el mensaje de pago fallido
            succes: false                           //se retorna el estado de exito
        })
    }
}