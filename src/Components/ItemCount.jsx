import './ItemCount.css';

function ItemCount({cantidad, sumar, restar, producto}){



    return(
        <div>
            <div className = 'item-count'>
                <button className='btn-count' onClick={restar}>-</button>
                <span>{cantidad}</span>
                <button className='btn-count' onClick={sumar}>+</button>
            </div>
            <div className='cart-add'>
            <button className='btn-add' onClick={producto}> Agregar a carrito </button>
            </div>  
        </div>
    )
}

export default ItemCount;