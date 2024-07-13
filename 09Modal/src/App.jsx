import React, { useState } from 'react';
import Modal from './components/Modal';

const App = () => {

  const[showModal,setShowModal]=useState(false);
  return (
    <div className='text-center' >
      <h1 className='text-center bg-gray-700 text-white text-3xl p-4 mt-8'>Modal Practice using React and Tailwind css</h1>
      
      <button
      className='p-2 m-4 text-2xl bg-indigo-500 rounded-lg text-center text-white'
      onClick={()=>setShowModal(true)}>
        text Modal
      </button>
      

      <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
    </div>
  );
};

export default App;