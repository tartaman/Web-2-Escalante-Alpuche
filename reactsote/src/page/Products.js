import ProductListItem from "../components/ProductListItem";
import { useNavigate } from "react-router-dom";
import "../style/products.css";
import { useEffect, useState } from "react";

export default function Products() {
    const hasTokenInLocalStorage = localStorage.getItem("token") !== null;
    const navigate = useNavigate();
    if (!hasTokenInLocalStorage) {
        navigate("/login");
    }
    

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [word, setWord] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchProductsByWord = async () => {
            try {
                setLoading(true);
                const data = await getProductsByWord(word);
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products by word:", error);
            } finally {
                setLoading(false);
            }
        };

        if (word.length > 3) {
            fetchProductsByWord();
        }
    }, [word]);

    return (
        <div>
            <div className="articles">
                <h1>We release interesting articles <br /> about technology</h1>
                <p className="barritas">///////////////////////////////////////////////////</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input className="search" onChange={(e) => setWord(e.target.value)} placeholder="Buscar productos..." />
            </div>

            {loading && <p style={{ textAlign: "center" }}>Cargando productos...</p>}
            
            {!loading && products.length === 0 && (
                <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
                    Lo sentimos, no encontramos productos.
                </p>
            )}

            {!loading && products.length > 0 && products.map((item) => (
                <ProductListItem key={item.id} title={item.title} id={item.id} description={item.description} images={item.images} />
            ))}
        </div>
    );
}

async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
}

async function getProductsByWord(word) {
    const response = await fetch(`https://dummyjson.com/products/search?q=${word}`);
    return response.json();
}
