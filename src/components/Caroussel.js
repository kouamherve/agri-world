/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Caroussel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

  const nextSlide = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className=" overflow-hidden relative">
      <div
        className="flex transition ease-out duration-700 delay-150"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center"
          >
            {slide}
          </div>
        ))}
      </div>
      <div className=" absolute text-3xl inset-0 mx-2 hidden items-center justify-between">
        <button
          onClick={prevSlide}
          className=" bg-white/80 text-gray-800 shadow rounded-full p-2 hover:bg-white"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className=" bg-white/80 text-gray-800 shadow rounded-full p-2 hover:bg-white"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 hidden">
        <div className=" flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={` transition-all size-3 bg-white rounded-full ${
                current === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
