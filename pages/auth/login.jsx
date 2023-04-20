import React, { useEffect } from 'react'
import Img from './img'
import { FcGoogle } from 'react-icons/fc';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth  } from "../../utils/firebase";
import { useAuthState} from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

const Login = () => { 

  const router = useRouter();   

    // const googleLogin = async (e) => {
    //   e.preventDefault();
    //   const provider = new GoogleAuthProvider();
    //   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //   signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     // const credential = GoogleAuthProvider.credentialFromResult(result);----
    //     // const token = credential.accessToken;---
    //     // The signed-in user info.
    //     // const user = result.user; ----
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
        
    //     console.log(result.user);
    //   }).catch((error) => {
    //     // // Handle Errors here.
    //     // const errorCode = error.code;---
    //     // const errorMessage = error.message;---
    //     // // The email of the user's account used.
    //     // const email = error.customData.email;---
    //     // // The AuthCredential type that was used.
    //     // const credential = GoogleAuthProvider.credentialFromError(error);---
    //     // // ...
    //   });
    // } 

    

    const [user,setUser] = useAuthState(auth); 
    useEffect(() => {  
     console.log(user); 
    },[user])  
    

    const googleLogin = async (e) =>{  
         e.preventDefault();  
         const provider = new GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
          try {
            const result = await signInWithPopup(auth,provider);
            // console.log(result.user);
            router.push('/');
          } catch (error) {
            console.log(error);
          }  
    } 
    
  return ( 
   <>
    <div>
         <div className="w-screen md:h-screen grid grid-rows-2 md:grid-cols-2">
         <div className="flex items-center justify-center h-screen"> 
          <form>
          <div className="w-96 p-6 rounded">
          <div className="flex items-center justify-center mb-10">
          <div className="container py-2 px-2 mx-0 min-w-full flex flex-col items-center">
                            <button onClick={googleLogin}
                                    className="bg-green-400 w-64 h-10 text-gray-100 py-2 px-4 font-medium flex align-middle gap-10 rounded-full hover:bg-green-600 ">
                              <FcGoogle className='text-2xl'/> Login with Gmail
                            </button> 
                        </div>  
                     </div>  
                   </div>  
                  </form>   
               </div>   
             <div>    
               <Img/>   
            </div>
         </div>
    </div>
   </>
  ) 
}

export default Login