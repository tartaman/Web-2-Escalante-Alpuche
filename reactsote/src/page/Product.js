import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ProductDetail from "../components/ProductDetail";
export default function Product() {
    const {id} = useParams();

    const [product, setProduct] = useState(null);
    useEffect(() =>{
        const fetchProduct = async () => {
            const data = await getProductById(id);
            console.log(data)
            setProduct(data)
        }
        fetchProduct()
    }, [id])
    return ( 
        <div> 
            {product && <ProductDetail product={product} />}
        </div>
    )
}

async function getProductById(id) {
    const product = await fetch(`https://dummyjson.com/products/${id}`)
    return product.json();
}