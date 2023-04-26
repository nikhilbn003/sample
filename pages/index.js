import { useRouter } from 'next/router';
import {  useState,useContext, useRef, useEffect } from 'react'
import Product from './components/Product'
import {initMongoose} from '../lib/mongoose';
import {findAllProducts} from './api/products';
// import Footer from './ components/Footer' ;
import Layout from './components/Layout'
import {ProductsContext} from '../pages/components/ProductsContext'
import { AuthStateHook, useAuthState } from 'react-firebase-hooks/auth';
import { Auth, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { set } from 'mongoose';


// // //  ------------------- fetch data from api using hooks --------------------------------

// //   const [ productsInfo, setProductsInfo] = useState([]);
// //   useEffect( () => {
// //     fetch( 'api/products')
// //      .then(response => response.json())
// //      .then(json => setProductsInfo(json));
// //   },[])

// //   // console.log({productsInfo});

//   // ------------display list of categories------------


// // ---------------  new set() is used to stop displaying multiple times----------
// // ----------------[...] is used to display elements in a array ------------

//   const  categoriesNames = [...new Set(products.map(p => p.category))];   
//   // console.log(categoriesNames);




export default function Home({products}) {
 const [open,setOpen] = useState(false);
  const [user,setUser] = useAuthState(auth); 
  const [phrase,setPhrase] = useState('');

  const menuRef = useRef();
  const imageRef = useRef();


  useEffect(() => {
    window.addEventListener("click", (e)=>{
      if(e.target !==menuRef.current && e.target !==imageRef.current){
        setOpen(false);
      }
     });
  },[]);


  const categoriesNames = [...new Set(products.map(p => p.category))];

  if (phrase) {
    products = products.filter(p => p.name.toLowerCase().includes(phrase));
  }

  const router = useRouter();

  
  function handleClick() {
       router.push('/auth/login');
    }

    function handleCart() {
      router.push('/checkout');
   }
   
   function handleProfile(){
    router.push('/profile')
   }


   const {selectedProducts} = useContext(ProductsContext)


  const handleSignOut = async (e) =>{  
    e.preventDefault();  
   
     try {
       const result = await signOut(auth);
       router.push('/');
     } catch (error) {
       console.log(error);
     }  
} 



  return (
    <Layout>
       {/* <h1> Hello !{user.displayName}</h1> */}
      <div className='flex float-right space-x-4 justify-items-end mb-3'>
        
      <button className='bg-emerald-500 rounded-xl  text-white shadow-xl px-3 grid grid-cols  place-content-center ' onClick={handleCart}>
         <div className='flex items-center space-x-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
         {selectedProducts.length}

       </div>
       
         </button>
         {!user && (
            <button className='bg-emerald-500 rounded-xl  text-white shadow-xl px-3 grid grid-cols  place-content-center ' onClick={handleClick}> login
            </button>
       )}
       {user && (
        <>
         {/* <h1> Hello ! {user.displayName}</h1> */}
        <div className='flex items-center relative'>
         <img 
         onClick={()=>setOpen(!open)}
         ref={imageRef}
         src={user.photoURL} 
         alt="avatar" 
         referrerPolicy='no-referrer'
         className='w-10 rounded-full'/>
         {/* <span class="ml-2 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </span> */}
        </div>

        { open && (
        <div ref={menuRef} className='bg-white p-2 w-24 shadow-lg absolute  top-16'>
         <ul>
          <li 
          onClick={()=>  handleProfile() }   
          className='p-2 text-lg cursor-pointer rounded hover:bg-green-400'>
            profile
          </li>
          <li 
          // onClick={()=> setOpen(false)}
          onClick={handleSignOut}
          className='p-2 text-lg cursor-pointer rounded hover:bg-green-400'>
            Logout
          </li>
         </ul>
         </div>
          ) }
        </>
       )}
            
           </div> 
      <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className="bg-gray-200 w-full py-2 px-4 rounded-xl"/>
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            {products.find(p => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo._id} className="px-5 snap-start">
                      <Product {...productInfo} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </Layout>
  )
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}




