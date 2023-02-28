import React from 'react'
import Navbar from './components/navbar'


const form2 = () => {
  return (
    <div>
      <Navbar/>
         <div>
          
        <form>
            <div  className='flex flex-col space-y-4 mt-5 '>
            


            <label className='ml-3'> type: 
            
            <div className='flex space-x-4'>         
  <label>
  <input type="radio" name="proptype" value="green"/>
  AL
</label>
<label>
  <input type="radio" name="proptype" value="blue"/>
  AL-P
</label>
<label>
  <input type="radio" name="proptype" value="blue"/>
  RBF
</label>
</div>
            </label>
            <label className='ml-3'> no of units: 
                <input type='text' className='ml-9' placeholder='enter the no of units'/>
            </label>
            <label className='ml-3'> property id: 
                <input type='text' className='ml-7' placeholder='enter the property id'/>
            </label>
            <label className='ml-3'> investment date: 
                <input type='date' className='ml-4' placeholder='enter the inv date'/>
            </label>


           <label>  status :
            <div className='flex space-x-4'>         
  <label>
  <input type="radio" name="status" value="green"/>
  1.token
</label>
<label>
  <input type="radio" name="status" value="blue"/>
  2.full-pyment
</label>
</div>
</label>


<label className='ml-3'> amount paid: 
                <input type='text' className='ml-9' placeholder='enter the amount paid'/>
            </label>

            
  

            <button> submit </button>
           </div>
        </form>
     </div>
    </div>
  )
}

export default form2

















// <label className='ml-3 block uppercase tracking-wide  text-gray-700 text-xl font-bold mb-2'> no of investment : 
//             {/* <select class="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" > */}
//         <select className='ml-7 py-2 px-2 pr-8  bg-gray-200 border border-gray-200 rounded'>
//       <option> 1</option>
//       <option>2</option>
//       <option>3</option>
//     </select >
//                 {/* <input type='' className='ml-7' placeholder='enter the first name'/> */}
//             </label>