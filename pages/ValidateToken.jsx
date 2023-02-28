import React from 'react'
import { useState,useEffect} from 'react';


const ValidateToken = () => {
  const [coupon,setCoupon]=useState();
  useEffect( () => {
        fetch( 'api/coupon')
          .then(response => response.json())
        .then(json => setCoupon(json));
       },[])

       console.log(coupon);

const [value,setvalue]=useState();

const handleSubmit = async(e) => {
e.preventDefault();

}

  return (
   
    <div>
      <form onSubmit={handleSubmit} >
       <label>
         enter a value: 
        <input type= 'text'  value={value}  onChange={(e)=> {setvalue} } className='bg-black text-white' />
        </label>
        <button type='submit'> submit</button>
     </form>
    </div>
  )
}

export default ValidateToken