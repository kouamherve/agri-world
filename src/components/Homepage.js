import React from "react";
import Caroussel from "./Caroussel";

export default function Homepage() {
  const slides = [
    {
      id: 1,
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/07/04/10/45/garden-radish-7300875_1280.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/30/15/23/apples-1873078_1280.jpg",
    },
  ];
  return (
    <div className=" max-w-sm mx-auto">
      <Caroussel autoSlide={true} autoSlideInterval={5000}>
        {slides.map((s) => (
          <img
            key={s.id}
            className="w-full h-[400px] object-cover object-center"
            src={s.imageUrl}
            alt=""
          />
        ))}
      </Caroussel>
    </div>
  );
}
