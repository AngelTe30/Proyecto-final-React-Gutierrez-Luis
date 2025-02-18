import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) =>{

    const {cart, addItem }= useContext(CartContext);
    console.log(cart);

    const [count, setCount] = useState(1);

    const minus = () => {
        count > 1 && setCount(count-1)
    }

    const plus = () => {
        count < item.stock && setCount(count+1)
    }

    
    return (
        <div className="Container">
            <div className="Details">
                <img src={item.image} alt={item.title}/>

                <div className="Content">
                    <h3 className="title">{item.title}</h3>
                    <span>$ {item.price}</span>
                    <div className="Add">
                        <ItemCount cantidad={count} sumar={plus} restar={minus} producto={() => {addItem(item,count)}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail


