import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import Loading from "./Loading"
import { doc, getDoc} from "firebase/firestore"
import { db } from "./firebase/data"




const ItemDetailContainer = () =>{
    const [item, setITem] = useState(null)
    const [loading, setLoading] = useState(true);
    const id = useParams().id;

    useEffect(() => {
        setTimeout(() => {
            const docRef = doc(db,"productos",id);

            getDoc(docRef)
                .then((resp) => { 
                    setITem({...resp.data(), id: resp.id});
                })
            setLoading(false)
        },700)
    },[id])


    return(
        <div>
            {loading ?(
                <Loading/>
            ):(
                <div>
                {item && <ItemDetail item={item}/>}
                </div>
            )}
        </div>
    )
}


export default ItemDetailContainer