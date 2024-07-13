
import React, { useState } from 'react';

const Modal = ({isVisible,onClose}) => {
    if(!isVisible) return null;

    const handleClose=(e)=>{
        if(e.target.id=='wrapper') onClose();
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
        id='wrapper'
        onClick={handleClose}>

            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl place-self-end' 
                onClick={()=>onClose()}>X</button>
                <div className='bg-white p-3 rounded '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam incidunt odit ex autem illo
                    facilis quaerat totam, quas, ab iste quidem dignissimos hic, omnis expedita dolorem earum quos 
                    repellat nesciunt ipsam amet nam laboriosam ea? Eligendi molestias dolore ipsum. Corporis voluptate 
                    obcaecati magnam esse totam laudantium asperiores impedit nesciunt accusantium.
                </div>
            </div>
        </div>
    );
};

export default Modal;