import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import React from "react";
import banner1 from "./images/banner1.jpeg";
import banner2 from "./images/banner2.jpeg";
import banner3 from "./images/banner2.jpeg";

function Carousel() {
  const slides = [
    {
      url: banner1,
    },
    {
      url: banner2,
    },
    {
      url: banner3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] mx-auto py-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-[400px] sm:h-[300px] md:h-[400px] lg:h-[400px] bg-center bg-cover duration-300"
      ></div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-white cursor-pointer sm:text-lg lg:text-2xl rounded-full p-2 bg-black/20"
        onClick={prevSlide}
      >
        <ArrowLeftIcon />
      </div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-white cursor-pointer sm:text-lg lg:text-2xl rounded-full p-2 bg-black/20"
        onClick={nextSlide}
      >
        <ArrowRightIcon />
      </div>
      <div className="flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {/* <RxDotFilled /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
