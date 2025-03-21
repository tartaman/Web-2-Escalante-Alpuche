import "../style/products.css"
export default function ProductListItem() {
    return (
        <div className="product-list-item">
            <div className="product-image">
                <img src="https://i.pinimg.com/170x/56/6a/8b/566a8b03ee78dd47250c559e26906df9.jpg" alt="Product"/>
                
            </div>
            <div className="product-details">
                <h2>
                    Aqui va el nombre del producto y mas texto de ejemplo
                </h2>
                <p>
                   escribire 50 veces lorem ipsum para que se vea bien en la pagina y no se vea tan feo y se vea como un producto real 
                </p>
            </div>
        </div>
    );  
}