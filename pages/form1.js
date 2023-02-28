import React from 'react'

const form1 = () => {

  return (
    <div> 
        <div className='bg-green-400 container mx-auto flex items-center justify-between px-4 '>
           
           <div>
           <a href="#" class="text-black text-2xl font-bold"> investors detail </a>
            </div> 
            <div class="text-center">
      <a href="#" class="text-black px-4 py-2 rounded hover:bg-white">FORM 1</a>
      <a href="#" class="text-black px-4 py-2 rounded hover:bg-white">FORM 2</a>
      <a href="#" class="text-black px-4 py-2 rounded hover:bg-white">FORM 3</a>
    </div>
    <div>
      <a href="#" class="text-white px-4 py-2 rounded hover:bg-gray-800">Sign in</a>
    </div> 
            
        </div>
        <form>
            <div  className='flex flex-col space-y-4 mt-5 '>
            <label className='ml-3'> fname: 
                <input type='text' className='ml-7' placeholder='enter the first name'/>
            </label>
            <label className='ml-3'> lname: 
                <input type='text' className='ml-7' placeholder='enter the last name'/>
            </label>
            <label className='ml-3'> email: 
                <input type='email' className='ml-9' placeholder='enter the email'/>
            </label>
            <label className='ml-3'> phone: 
                <input type='text' className='ml-7' placeholder='enter the phoneno'/>
            </label>
            <label className='ml-3'> referral id: 
                <input type='text' className='ml-7' placeholder='enter the referral id'/>
            </label>
            <label className='ml-3'> reg date: 
                <input type='date' className='ml-4' placeholder='enter the reg date'/>
            </label>
            <button> next page </button>
           </div>
        </form>
     </div>
  )
}

export default form1