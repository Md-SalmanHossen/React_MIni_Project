import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="border-b-2">
      
      <button
        className="w-full flex justify-between items-center py-4 px-6 text-lg font-medium text-left"
        onClick={toggleOpen}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 text-gray-700">
          {content}
        </div>
      )}
      
    </div>
  );
};

export default AccordionItem;
