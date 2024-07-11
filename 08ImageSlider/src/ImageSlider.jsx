import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    const [currentImgIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }

    return (
        <div className='relative'>

            <div className='overflow-hidden rounded-lg'>
                <img 
                    src={images[currentImgIndex]}
                    alt="slide" 
                    className='w-full h-auto rounded-lg' 
                    style={{ maxHeight:'500px'}} 
                />
            </div>

            <div className='absolute top-1/2 transform -translate-y-1/2 left-4'>
                <button
                    className="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
                    onClick={prevSlide} >
                    &larr; Prev
                </button>
            </div>

            <div className='absolute top-1/2 transform -translate-y-1/2 right-4'>
                <button
                    className="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
                    onClick={nextSlide} >
                    Next &rarr;
                </button>
            </div>

        </div>
    );
};

export default ImageSlider;
