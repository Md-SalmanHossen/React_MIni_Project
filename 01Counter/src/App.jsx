import React, { useState } from 'react';

const App = () => {
  const [counter,setCounter]=useState(0);
  const handleDecrease=()=>{
    if(counter<1){
      alert('negative number is not acceptable');
      setCounter(0)
    }else setCounter(counter-1)
    
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <p className='text-3xl'>Your Number is : {counter}</p>
    <div className='flex justify-center items-center'>
      <button onClick={()=>{setCounter(counter+1)}} className='text-white bg-green-400 rounded-lg p-2 m-2 text-center'>Increase</button>
      <button onClick={()=>{setCounter(0)}} className='text-white bg-red-400 rounded-lg p-2 m-2 text-center'>Reset</button>
      <button onClick={handleDecrease} className='text-white bg-yellow-400 rounded-lg p-2 m-2 text-center'>Decrease</button>
    </div>
    </div>
  );
};

export default App;