import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';

const App = () => {

  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState({});

  const handleSubmit=(e)=>{
    e.preventDefault();

    const newErrors={};
    
    if(!userName) newErrors.userName='userName is required'
    if(!password) newErrors.password='Password is required'

    setError(newErrors);

    if(Object.keys(newErrors).length==0){
      console.log('Form submitted',{userName,password});
      toast('Form submitted successfully')
    }

  }



  return (
    <div className=''>
      <h1 className='bg-gray-800 p-3 text-3xl mt-5 rounded text-white
       text-center '>Practice Form Validation with React</h1>
      
      <div className='flex justify-center'>
        <form action=""
        onSubmit={handleSubmit}
        className=' p-4 shadow-lg mt-8 w-[400px] bg-blue-300'>

          <div>
            <label>UserName</label>
            <input 
            type="text" 
            onChange={(e)=>setUserName(e.target.value)}
            className='w-full'/>

            {error.userName && (
                <p className='text-red-500 text-sm mt-1'>{error.userName}</p>
              )}
          </div>

          <div>
            <label>Password</label>
            <input
            type="password" 
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full'/>
            {error.password &&(
              <p className='text-red-500 text-sm mt-1'>{error.password}</p>
            )}
          </div>

            <button 
            onClick={handleSubmit}
            className='hover:bg-indigo-700 py-1 mt-2 px-2 outline-none bg-green-700 rounded-lg text-white'
            type='submit'>Login</button>
        
        </form> 
      </div>
            <ToastContainer/>
    </div>
  );
};

export default App;