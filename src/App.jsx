import {  Route,  Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import NotFound from "./components/NotFound.jsx";


export default function App() {
  return (
    <div className="mx-auto text-center  min-h-screen">
        <Navbar />
        <Routes>
             <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />}/>
          <Route path="*"  element={<NotFound />}/>
        </Routes>
    </div>
  );
}
