import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/Authcontext';

const useSignup = () => {
  const [loading,setLoading]=useState(false);
  const {setauthUser}=useAuthContext();

  const signup=async({fullname,username,password,confirmpassword,gender})=>{
    const success=handleinputerrors({fullname,username,password,confirmpassword,gender});
    if(!success){
        return;
    }

    setLoading(true);
    try {

        const res= await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({fullname,username,password,confirmpassword,gender})
        })

        const data= await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        
        //localstorage
        localStorage.setItem("chat-user",JSON.stringify(data));
        setauthUser(data);
        
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false);
    }
  }

  return {loading,signup};
}

export default useSignup

function handleinputerrors({fullname,username,password,confirmpassword,gender}){
    if(!fullname || !username || !password || !confirmpassword || !gender){
        toast.error('please fill all the fields')
        return false
    }

    if(password!==confirmpassword){
        toast.error('passwords do not match')
        return false
    }

    if(password.length <6){
        toast.error('password length must be atleast 6 chareacters')
        return false
    }

    return true
}