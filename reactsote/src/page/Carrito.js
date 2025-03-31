import { useState, useEffect } from "react";
import "../style/cart.css";
import { useNavigate } from "react-router-dom";
export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="body">
            <div className="cart">
                <h1>Carrito de Compras</h1>
                {cart.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad</th>
                                <th>Precio Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.images?.[0] ?? ""} alt={item.title} width="50" height="50" /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <h2>Total a Pagar: ${totalPrice.toFixed(2)}</h2>
            </div>
        </div>

    );
}