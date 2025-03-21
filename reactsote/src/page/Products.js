import ProductListItem from "../components/ProductListItem"
import "../style/products.css"
export default function Products() {
    return (
        <div>
            <div className="articles">
                <h1 >We release interesting articles <br/> about technology</h1>
                <p className="barritas">////////////////////////////////////////////////////</p>
            </div>
            <ProductListItem />
        </div>
    )
}