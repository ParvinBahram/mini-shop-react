import { useNavigate, useParams } from "react-router-dom"
import productsList from "./productsList";
import { useContext } from "react";
import { cartContext } from "./cartReducer";

function ProductDetail() {
  const {state,dispatch}= useContext(cartContext);
  const {id} = useParams();
  const navigate = useNavigate()
  const product = productsList.find(p => String(p.id) === id)
   const isInCart = state.some((s) => s.id === product.id);

  const handleClick = () => {
    if (!isInCart) dispatch({ type: "add", payload: product });
  };
  return (
    <div className="py-8 sm:py-12 items-center flex flex-col sm:mr-20  sm:flex-row  space-y-8" dir="rtl">
      <div className="w-50 sm:w-70 shadow-xl ">
      <img className=" rounded" src={product.imgUrl} />
      </div >
      <div className="text-start space-y-5 flex flex-col sm:mr-15">
      <p className="">{product.title}</p>
      <p className="">نام هنرمند : <span className="font-bold">{product.artist}</span></p>
      <p className="">ابعاد : {product.size}</p>
      <button className=" w-max text-sm rounded-2xl text-primary bg-gray-200 font-bold px-4 py-2  hover:shadow hover:opacity-80" onClick={handleClick}> {isInCart ? " موجود در 🛒" : " افزودن به سبد"}</button>
      <button className="text-primary w-max" onClick={()=> navigate("/")}>بازگشت به فروشگاه</button>
</div>
    </div>
  )
}

export default ProductDetail