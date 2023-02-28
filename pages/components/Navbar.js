import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav>
         <div className='bg-green-400 container mx-auto flex items-center justify-between px-4 '>
           
           <div>
           <a href="#" class="text-black text-2xl font-bold"> investors detail </a>
            </div> 
            <div className="text-center">
          <Link  legacyBehavior href="/form1">
            <a className="text-black px-4 py-2 rounded hover:bg-white">form1</a>
          </Link>
          <Link legacyBehavior href="/form2">
            <a className="text-black px-4 py-2 rounded hover:bg-white"> form2</a>
          </Link>
        </div>
        <div>
          <a href="#" className="text-white px-4 py-2 rounded hover:bg-gray-800">Sign in</a>
        </div>
            
        </div>
     </nav>
    </div>
  )
}

export default Navbar