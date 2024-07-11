import React from 'react';
import ImageSlider from './ImageSlider';

const images = [
  'src/assets/1.jpg',
  'src/assets/2.jpg',
  'src/assets/3.jpg',
  'src/assets/4.jpg',
  'src/assets/5.jpg',
];

const App = () => {
  return (
    <div className='App'>
      <h1 className='text-center bg-gray-800 text-white p-4 text-3xl mt-8'>Image Slider using React and Tailwind CSS</h1>
      <div className='container mx-auto my-8'>
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default App;
