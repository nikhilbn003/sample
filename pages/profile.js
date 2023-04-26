import React, { useEffect, useState } from 'react'
import {  useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import {  updateProfile } from "firebase/auth";

function profile() {
  const [user,setUser] = useAuthState(auth); 
  const [displayName,setDisplayName] = useState('');
  useEffect(()=>{
    if(user){
      setDisplayName(user.displayName);
    }
  },[]);

    const handleSubmit = (e) => {
      e.preventDefault();
        if(user){
          updateProfile(user,{
            displayName,
          }).then(()=>{alert('updated succesfully');
        }).catch((error)=>{
          alert(error.message);
        });
        }
    };
    
  return (
    <>
    <div> 
      <h1>edit profile </h1>
      <form onSubmit={handleSubmit}>
      <label >Display Name:</label>
        <input
          type="text"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
         <button type="submit">Update Profile</button>
      </form>
    </div>
    </>
  )
}

export default profile