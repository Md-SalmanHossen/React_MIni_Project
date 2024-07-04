import React, { useState,useCallback,useEffect } from 'react';

const App = () => {

  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{

    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+{}[]~``;.,"


    for(let i=0;i<length;i++){
      let char =Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char);
    }

    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])
      
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 mb-4 my-8 text-orange-500 bg-gray-500'>
      <h1 
      className='text-white text-center my-3 pt-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-indigo-500 text-white px-3 py.5 shrink-0'>
        copy</button>

      </div>


      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range" 
          min={7}
          max={180}
          value={length}
          className='cursor-pointer mb-4'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className='mb-4'>Length: {}</label>
        </div>
        
        <div>
          <input 
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div>
          <input
          type="checkbox" 
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>setCharAllowed((prev)=>!prev)}
          />
        </div>
        <label htmlFor="characterInput">Characters</label>

      </div>
    </div>
  );
};

export default App;