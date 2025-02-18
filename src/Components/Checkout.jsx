import { useContext, useState } from "react";  
import { CartContext } from "./CartContext";
import {useForm} from "react-hook-form";
import { addDoc, collection} from "firebase/firestore";
import { db } from "./firebase/data";
import { Link } from "react-router-dom";
import "./Checkout.css";


const Checkout = () =>{

    const [ pedidoId, setPedidoId] = useState("");

    const {cart, priceCart,clearCart} = useContext(CartContext);


    const {register, handleSubmit} = useForm();
    

    const enviar = (data) => { 
        const pedido ={
            cliente:data,
            productos:cart,
            Total:priceCart()
        };
        console.log(pedido);

        const pedidosRef= collection(db, "pedidos");

        addDoc(pedidosRef,pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })

    }


    if(pedidoId){
        return(
            <div className="container">
                <h1> Muchas gracias por tu compra</h1>
                <p>Tu orden de compra es {pedidoId}</p>
                
                <Link to="/Productos" className="Enviar">Volver a comprar</Link>
            </div>
        )
        
    }
    
    return (


            <div className="container">
                <h1 className="main=title">Orden de compra</h1>
                <form className="formulario" onSubmit={handleSubmit(enviar)}>

                    <input type="text" placeholder="Ingresa tu nombre" {...register("name")} />
                    <input type="email" placeholder="Ingresa tu email" {...register("email")}/>
                    <input type="phone" placeholder="Ingresa tu telefono" {...register("phone")}/>

                    <button className="enviar" type="submit">Comprar</button>
                </form>
            </div>

        
        
    )
}


export default Checkout;