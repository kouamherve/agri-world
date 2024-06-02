import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({ prevSlide, nextSlide }) {
  return (
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
  );
}
