import { useContext } from 'react';
import './CartWidget.css'; 
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {countCart} = useContext(CartContext);

    return (
        <div className="cart-widget">
            
            <Link className='cart-icon' to="/Cart">
                <FaShoppingCart />
                <span className="cart-count">{countCart()}</span>
            </Link>
        </div>



    );
};

export default CartWidget;