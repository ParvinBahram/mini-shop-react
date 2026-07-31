import { useContext } from "react";
import { cartContext } from "./cartReducer";
import { Link, useNavigate } from "react-router-dom";


function Cart() {
  const {state,dispatch} = useContext(cartContext);
  const navigate = useNavigate();
  const totalPrice = state.reduce((total , item)=>{
    const newPrice = item.price * item.qty 
    return total + newPrice ;
  },0);

  return (
    <div className=" py-10 flex flex-col gap-10" dir="rtl">
      <h1 className="font-bold my-4 text-lg text-center mx-auto">محصولات سبد خرید</h1>
      <div className="flex flex-col lg:flex-row  lg:justify-between lg:gap-12  ">
        <div className="space-y-8 w-max">
    {state.map((s)=> (
      <div key={s.id} className="text-xs sm:text-base  sm:max-w-3xl mr-5 sm:mr-10 pl-2 sm:pl-4 flex flex-row rounded-lg shadow-lg justify-start items-center gap-x-3 sm:gap-x-5" >
      <img src={s.imgUrl} alt="" className="w-15 h-15 sm:w-25 sm:h-25  cursor-pointer" onClick={()=> navigate(`/product/${s.id}`)} />
      <p className="">{s.title}</p>
      <div className="flex gap-2">
        <button  className="px-1 sm:px-2" onClick={()=> dispatch({type:"increase", payload:s})}>+</button>
        <p className="" >{s.qty.toLocaleString("fa-IR")}</p>
        <button className="px-1 sm:px-2" onClick={()=> dispatch({type:"decrease", payload:s})}>-</button>
      </div>
      <p className="">{(s.price * s.qty).toLocaleString("fa-IR")}  تومان </p>
      <div className="">
        <button className="fas fa-trash text-secondary text-xs" onClick={()=> dispatch({type:"delete", payload:s})}></button>
      </div>
      </div>
    ))}
    </div>

    <div className="lg:ml-15 xl:ml-30" >
      <div className={`mt-10  ${state.length !== 0 ? "hidden" : "-mr-320"}`}>
      <h2 className='text-center text-2xl text-secondary my-8' >سبد خرید شما خالی است</h2>
      <Link to="/" className="text-sm rounded-2xl text-primary bg-white font-bold p-2 hover:shadow hover:opacity-80">بازگشت به فروشگاه</Link>
      </div>
      <div className={`flex justify-center gap-8 mx-auto mt-10 ${state.length === 0 ? "hidden" : ""}`}>
      <button className="rounded p-2 bg-secondary text-sm" onClick={()=> dispatch({type:"clear"})}>پاک کردن سبد خرید</button>
      <button className="rounded px-5 py-2 bg-primary text-white text-sm"> قیمت کل : {totalPrice.toLocaleString("fa-IR")} تومان</button>
      </div>
    </div>
    </div>
      </div>
  )
}
export default Cart;