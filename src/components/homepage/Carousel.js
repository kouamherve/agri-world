/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Dot from "./Dot";
import Slider from "./Slider";

export default function Carousel({
  children: clients,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((current) => (current === 0 ? clients.length - 1 : current - 1));

  const nextSlide = () =>
    setCurrent((current) => (current === clients.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden md:overflow-x-auto">
      <div
        className="flex transition ease-out duration-700 delay-150 gap-0 sm:snap-x sm:snap-mandatory sm:gap-10 md:gap-20 lg:gap-6"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center sm:min-w-72 md:min-w-80 lg:min-w-72"
          >
            {client}
          </div>
        ))}
      </div>
      <Slider prevSlide={prevSlide} nextSlide={nextSlide} />
      <Dot clients={clients} current={current} setCurrent={setCurrent} />
    </div>
  );
}
