import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase/data.js";



const ItemListContainer = () => {
        const [products, setProducts] = useState([]);
        const [loading, setLoading]= useState(true);
        const category = useParams().category;
        
        useEffect(()=>{
            setTimeout(()=>{
                const productosRef = collection(db, "productos");
                const q = category ? query(productosRef,where("category","==",category)) : productosRef;
    
                getDocs(q)
                    .then((resp) =>{
                        setProducts(
                            resp.docs.map((doc) => {
                                return { id: doc.id, ...doc.data()}
                                
                            })
                        )
                    })
                setLoading(false);
            },1500)
       },[category]);
    

    return(

        <>
            <div className=" filters">
                <Link to="/Productos" className="filter">Todos</Link>
                <Link to="/Productos/Laptop" className="filter">Laptop</Link>
                <Link to="/Productos/Smartphone" className="filter">Smartphone</Link>
                <Link to="/Productos/perfume" className="filter">Perfume</Link>
                <Link to="/Productos/cámara" className="filter">Camara</Link>
                
            </div>
        <div>
            {loading ?(
                <Loading/>
            ):(
                <div className="Shop">
                    <div className="card">
                    {products.map((product) =>(
                        <div className="Item-card" key={product.id}>
                            <img className="Item-image" src={product.image} alt={products.name}/>
                            <div className="item-description">
                                <h2 className="Item-title">{product.title}</h2>
                                <p className="Item-price">${product.price}</p>
                            </div>
                            
                            <div className="btn-details">
                                <Link className="btn" to={`/item/${product.id}`}>Ver más</Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            )
            }
        </div>
        </>

    )
}


export default ItemListContainer;


