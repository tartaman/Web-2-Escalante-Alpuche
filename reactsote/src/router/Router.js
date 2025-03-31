import {Routes, Route} from "react-router-dom"

import Home from "../page/Home"
import About from "../page/About"
import Contact from "../page/Contact"
import Login from "../page/Login"
import Products from "../page/Products"
import Product from "../page/Product"
import Carrito from "../page/Carrito"
export default function MyRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/carrito" element={<Carrito/>}/>
    </Routes>
  )
}