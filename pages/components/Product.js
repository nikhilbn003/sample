import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
// import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Product({_id,name,price,description,picture,}) {
   const { setSelectedProducts } =useContext(ProductsContext);

   const showToastMessage = () => {
    toast.success('ADDED TO CART !', {
        position: toast.POSITION.TOP_LEFT
    });
};
  
  function addProduct(){
    setSelectedProducts(prev => [...prev,_id])
    console.log("added")
  }


  
   return(
        <div className="w-64 ">
          <div className="bg-blue-200 p-5 rounded-xl">
            <img src={picture} alt="iphone" />  
          </div>
          <div className="mt-2">
            <h3 className="font-bold text-lg">{name}</h3>
           </div>
           <p className='text-sm mt-3'>{description}</p>
           <div className='flex mt-1'>
            <div className='text-2xl font-bold grow'>{price}</div>
             <button onClick={ () => {addProduct(); showToastMessage(); } }className='bg-green-400 text-white py-2 px-4 rounded-xl'> Add to cart </button> 
             <ToastContainer /> 
            </div>
          </div>
    );

}