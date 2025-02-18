import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartInitial = JSON.parse(localStorage.getItem("Cart")) || [];

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState(cartInitial);

    const addItem = (item,count) => {
      const itemCart = {...item,count};
    
      const newCart = [...cart];
    
      const inCart = newCart.find((producto) => producto.id === itemCart.id);
      
      
      if(inCart){
         inCart.count += count;
      }else{
          newCart.push(itemCart)
      }
    
      setCart(newCart);
      
    }

    const countCart = () =>{
      return cart.reduce((acc,prod) => acc + prod.count,0);
    }

    const priceCart = () => {
      return cart.reduce((acc, prod) => acc + prod.price * prod.count,0)
    }

    const clearCart = () =>{
      setCart([]);
    }

    useEffect(() => {
      localStorage.setItem("Cart",JSON.stringify(cart))
    },[cart])
    
    return(
        <CartContext.Provider  value= {{cart, addItem, countCart,priceCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}


