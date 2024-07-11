import React from 'react';
import Accordion from './components/Accordion';

const App = () => {
  const accordionItems = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.'
    },
    {
      title: 'What is Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.'
    },
    {
      title: 'Why use React with Tailwind CSS?',
      content: 'Using React with Tailwind CSS allows for building component-based UIs with a modern styling approach.'
    }
  ];

  return (
    <div>
      <header className="bg-gray-800 text-white text-center py-6">
        <h1 className="text-3xl font-bold">React Accordion with Tailwind CSS</h1>
      </header>
      <main className="p-6">
        <Accordion items={accordionItems} />
      </main>
    </div>
  );
};

export default App;
