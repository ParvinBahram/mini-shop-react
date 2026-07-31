import { createContext } from "react";

export const initialState = [];
export const cartContext = createContext(null);

   export function reducer (state, {type,payload}){
    switch (type) {
        case "add": return [...state, payload];
        case "increase" : return state.map((item)=> item.id === payload.id ? {...item, qty:item.qty+1}: item);
        case "decrease" : return state.map((item)=> item.id === payload.id ? {...item,  qty:item.qty > 1 ? item.qty-1 : 1} : item);
        case "delete": return state.filter((item)=> item.id !== payload.id);
        case "clear": return initialState; 
        default: return state;
    }
   }