import React, { useState } from 'react';
import { SliderData } from './Info_carousel/SliderData';
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center w-100">
      <div className="text-4xl font-bold py-5 text-center ">More Info</div>
    <div className='slider'>
      <AiOutlineLeft className='left-arrow  ' onClick={prevSlide} />
      <AiOutlineRight className='right-arrow ' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ImageSlider;
