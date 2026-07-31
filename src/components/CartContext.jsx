import { useEffect, useReducer } from "react";
import { reducer } from "./cartReducer";
import { initialState } from "./cartReducer";
import { cartContext } from "./cartReducer";

 function saveProducts (){
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : []
 }
export default function CartProvider ({children}){
    const[state, dispatch] = useReducer(reducer, initialState , saveProducts);

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(state))
    }, [state])

    return(
        <cartContext.Provider value={{state, dispatch}}>
           {children}
        </cartContext.Provider>
      
    )
}