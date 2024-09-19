import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox.jsx';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';

const Signup = () => {
    const [inputs,setInputs]=useState({
        fullname:'',
        username:'',
        password:'',
        confirmpassword:'',
        gender:''
    })

    const handlecheckboxchange=(gender)=>{
        setInputs({...inputs,gender})
    }

    const {loading,signup}=useSignup();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await signup(inputs);
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg 
         bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                SignUp <span className='text-blue-500'>ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Fullname</span>
                    </label>
                    <input type="text" placeholder='Enter Fullname' className='w-full input input-bordered h-10'
                       value={inputs.fullname}
                       onChange={(e)=>{setInputs({...inputs,fullname:e.target.value})}}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
                    value={inputs.username}
                    onChange={(e)=>{setInputs({...inputs,username:e.target.value})}}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                    value={inputs.password}
                    onChange={(e)=>{setInputs({...inputs,password:e.target.value})}}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                            <span className='text-base label-text'>ConfirmPassword</span>
                    </label>
                    <input type="password" placeholder='Enter ConfirmPassword' className='w-full input input-bordered h-10'
                    value={inputs.confirmpassword}
                    onChange={(e)=>{setInputs({...inputs,confirmpassword:e.target.value})}}
                    />
                </div>

                <GenderCheckbox  oncheckboxchange={handlecheckboxchange} selectedgender={inputs.gender}/>
                
                <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Already have an account ?
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup;

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox.jsx';

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg 
//          bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 SignUp <span className='text-blue-500'>ChatApp</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Fullname</span>
//                     </label>
//                     <input type="text" placeholder='Enter Fullname' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                             <span className='text-base label-text'>ConfirmPassword</span>
//                     </label>
//                     <input type="text" placeholder='Enter ConfirmPassword' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <GenderCheckbox/>
                
//                 <a href="" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Already have an account ?
//                 </a>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Signup;
