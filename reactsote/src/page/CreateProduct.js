import { useEffect, useState, useNavigate } from 'react'
import { useFormStatus } from 'react-dom'
import '../style/createproduct.css'
import CreateProductActions from '../functions/CreateProductActions';
export default function CreateProduct() {
    const hasTokenInLocalStorage = localStorage.getItem("token") !== null;
    const navigate = useNavigate();
    if (!hasTokenInLocalStorage) {
        navigate("/login");
    }
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch("https://dummyjson.com/products/categories");
            const data = await response.json();
            setCategories(data);
        }
        fetchCategories()
    }, [])
    async function submitAction(formData) {
        const data = Object.fromEntries(formData)
        const response = await CreateProductActions(data);
        console.log(response);
        if (response?.id === undefined) {
            alert("Error al crear el producto")
            return;
        };


        const newProducts = localStorage.getItem("newProducts") != null ? JSON.parse(localStorage.getItem("newProducts")) : [];
        newProducts.push(response);

        const newProductsString = JSON.stringify(newProducts);

        localStorage.setItem("newProducts", newProductsString);
    }
    return (
        <div>
            <h1 className='title'>Create Product</h1>
            <form className="CreateProductForm" method='POST' action={submitAction}>
                <div className='containerFor2Divs'>
                    <div className='DivInput'>
                        <label htmlFor="title">Titulo</label>
                        <input type="text" id="title" name="title" />
                    </div>
                    <div className='DivInput'>
                        <label htmlFor="description">Descripcion</label>
                        <textarea style={{ height: '100px' }} type="text" id="description" name="description" />
                    </div>
                </div>
                <div className='split'>
                    <div className='DivInput'>
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" name="price" />
                    </div>
                    <div className='DivInput'>
                        <label htmlFor="category">Categories</label>
                        <select className="SelectCategory" name='category'>
                            {categories.map((category) => (
                                <option key={category.slug} value={category.slug}>
                                    {category.name}
                                </option>
                            ))
                                
                            }
                        </select>
                    </div>
                </div>
                <ButtonSave/>
            </form>
        </div>
    )

}

function ButtonSave() {
    const {pending} = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {pending ? "Saving..." : "Save"}
        </button>
    )
}