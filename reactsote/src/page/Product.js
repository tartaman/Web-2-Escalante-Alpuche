import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetail from "../components/ProductDetail";
export default function Product() {
    const hasTokenInLocalStorage = localStorage.getItem("token") !== null;
    const navigate = useNavigate();
    if (!hasTokenInLocalStorage) {
        navigate("/login");
    }
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