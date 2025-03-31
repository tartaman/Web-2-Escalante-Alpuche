import { useState, useEffect } from "react";
import "../style/productdetail.css";

export default function ProductDetail({ product }) {
    const image = product.images?.[0] ?? "";
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    // Guardar el carrito en localStorage cuando cambie
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = () => {
        const existingProduct = cart.find(item => item.id === product.id);
        const totalQuantity = existingProduct ? existingProduct.quantity + quantity : quantity;
        const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + product.price * quantity;
        const uniqueProducts = existingProduct ? cart.length : cart.length + 1;

        if (totalQuantity > product.stock) {
            alert(`No puedes agregar más productos de los disponibles en stock, ya tienes ${totalQuantity - quantity}`);
            return;
        }

        if (totalPrice > 10000) {
            alert("No puedes exceder los $10,000 en el carrito.");
            return;
        }

        if (uniqueProducts > 5) {
            alert("No puedes tener más de 5 productos diferentes en el carrito.");
            return;
        }

        let updatedCart;
        if (existingProduct) {
            updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: totalQuantity } : item
            );
        } else {
            updatedCart = [...cart, { ...product, quantity }];
        }

        setCart(updatedCart);
    };

    return (
        <div className="product-detail">
            <div className="product-detail__image">
                <img src={image} alt={product.name} width="300px" height="300px" />
            </div>
            <div className="product-detail__info">
                <input type="hidden" value={product.id} />
                <h1 className="product-detail__name">{product.title}</h1>
                <p className="product-detail__price">${product.price}</p>
                <p className="product-detail__description">{product.description}</p>
                <p className="product-detail__stock">Stock: {product.stock}</p>
                <input 
                    type="number" 
                    min="1" 
                    max={product.stock} 
                    className="product-detail__quantity" 
                    placeholder="Cuantos productos quieres?" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))} 
                />
                <button className="product-detail__button" onClick={handleAddToCart}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}
