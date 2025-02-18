import {useContext} from "react"
import { CartContext } from './CartContext'
import { Link } from "react-router-dom";
import "./Cart.css" 



const Cart = () => {

    const {cart, priceCart,clearCart} = useContext(CartContext);
    return (    
    
        <div className="container-cart">

            <h1>Tu carrito</h1>
            {
                cart.map((prod) => (
                    <div className="card" key={prod.id}> 
                        <p>{prod.count}</p>

                        <h3>{prod.title}</h3>
                        
                        <p>${prod.price}</p>
                    </div>
                    
                ))
            }
            {
                cart.length > 0 ?
                <>
                    <p className="Total">Total: ${priceCart()}</p>
                    <button onClick={clearCart} className="Clear">Vaciar</button>
                    <Link to="/checkout" className="Checkout">Finalizar Compra</Link>
                </>:
                <h2>Tu carrito esta vacio</h2>
            }
            
        
        </div>
    )
}


export default Cart