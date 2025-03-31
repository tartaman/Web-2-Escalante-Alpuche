import "../style/productdetail.css"

export default function ProductDetail({product}) {
    const image = product.images?.[0] ?? ""
    return (
        <div className="product-detail">
            <div className="product-detail__image">
                <img src={image} alt={product.name} width="300px" height="300px" />
            </div>
            <div className="product-detail__info">
                <h1 className="product-detail__name">{product.title}</h1>
                <p className="product-detail__price">${product.price}</p>
                <p className="product-detail__description">{product.description}</p>
                <p className="product-detail__stock">Stock: {product.stock}</p>
                <input type="number" min="1" max={product.stock} className="product-detail__quantity" placeholder="Cuantos productos quieres?" />
                <button className="product-detail__button">Agregar al carrito</button>
            </div>
        </div>
    )
}