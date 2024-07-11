import React from 'react';
import AccordionItem from './AccordionItems';
const Accordion = ({ items }) => {
  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
