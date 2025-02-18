import item from "../products.json";

export const ProductsId = (id) =>{
    return new Promise((resolve, reject) => {
        const product = item.find((el) => el.id === id)
        
        if (id){
            resolve(product)
        }else{
            reject({
                error:"No se encontró el producto"
            })
        }
    })
}