
import { useContext } from "react";
import productsList from "./productsList";
import { cartContext } from "./cartReducer";
import { Link } from "react-router-dom";

export default function Products(){
    const {state,dispatch} = useContext(cartContext);

    return(
        <>
        <h1 className="text-2xl font-bold mt-12"> همه محصولات</h1>
        <div className="container grid grid-cols-2 gap-x-8 gap-y-20 sm:grid-cols-3 lg:grid-cols-4 md:gap-x-10 lg:gap-x-12 mt-15 pb-15">
            {/* <h1 className="block">محصولات</h1> */}
            {productsList.map((product) => <SingleProduct  key={product.title} item={product} dispatch={dispatch} state={state} /> )}
        </div>
        </>
    )
}


function SingleProduct({item, dispatch, state}){
    
    const isInCart =  state.some((s)=> s.id === item.id);

    const handleClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(!isInCart)
       dispatch({type:"add", payload: item})
    }
    return(
        <Link  to={`/product/${item.id}`} className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 bg-white">
            <img src={item.imgUrl} alt={item.title} className="w-full p-3 sm:p-5" />
            <h3 className="font-bold mt-3 text-xs sm:text-base ">{item.title}</h3>
            <p className="font-bold my-3 ">{(item.price).toLocaleString("fa-IR")}</p>
            <button className="text-sm rounded-2xl text-primary bg-stone-100 font-bold p-2 mt-3 my-5 hover:shadow hover:opacity-80" onClick={handleClick}> {isInCart ? "🛒 موجود در " : "🛒 افزودن به"}</button>
        </Link>
    )
}