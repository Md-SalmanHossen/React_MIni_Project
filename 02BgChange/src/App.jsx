import React, { useState } from 'react';

const App = () => {
  const [color,setColor]=useState("olive");
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-xl px-3 py-1 bg-white rounded-3xl'>
              <button onClick={()=>{setColor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"red"}}>red</button>
              <button onClick={()=>{setColor("green")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"green"}}>green</button>
              <button onClick={()=>{setColor("blue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"blue"}}>blue</button>
              <button onClick={()=>{setColor("tomato")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"tomato"}}>tomato</button>
              <button onClick={()=>{setColor("black")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"black"}}>black</button>
            </div>
          </div>
    </div>
  );
};

export default App;