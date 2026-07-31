import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { cartContext } from "./cartReducer";

export default function Navbar(){
    const {state} = useContext(cartContext)
    return(
        <>
        <nav className="px-5 bg-primary text-white flex flex-row justify-around sticky top-0 left-0 z-50 h-15 items-center shadow-lg" dir="rtl">
            <div className="flex items-center">
                <img src="/src/assets/Adobe Express - file.png" alt="logo" className="w-25 h-13 -mr-8" />
                <h1 className="text-sm sm:text-lg -mr-4">فروش تابلوهای خوشنویسی</h1>
            </div>
            <div className="flex flex-row justify-center gap-8">
            <NavLink to="/" className="px-2 text-sm sm:text-lg">صفحه فروشگاه </NavLink>
            </div>
            <div className=" flex gap-6 items-center">
                <NavLink to="/cart" className="relative ">
                    <i className="fa-solid fa-cart-shopping text-sm sm:text-lg "></i>
                   <span className="absolute -top-2 -left-2.5 rounded-full px-1  text-xs bg-badge text-black pt-0.5">{state.length}</span>
                </NavLink >
            </div>
        </nav>
        
         </>
    )
}