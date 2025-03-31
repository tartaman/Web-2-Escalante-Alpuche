import { useEffect } from "react";
import "../style/products.css"
import { Navigate } from "react-router-dom";
export default function ProductListItem({title, id, description, images}) {
    const image = images?.[0] ?? ""
    return (
        <div className="product-list-item">
            <div className="product-image">
                <img src={image} alt="Product"/>
                
            </div>
            <div className="product-details">
                <h2>
                    {title}
                </h2>
                <p>
                   {description}
                </p>
                <a href={`/product/${id}`}>Ver Producto</a>
            </div>
        </div>
    );  
}