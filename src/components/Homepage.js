import React from "react";
import Caroussel from "./Caroussel";

export default function Homepage() {
  const slides = [
    {
      id: 1,
      subTitle: "Good Food",
      title: "Experience them real agricultural",
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/07/04/10/45/garden-radish-7300875_1280.jpg",
    },

    {
      id: 2,
      subTitle: "Good Food",
      title: "Healthy food for good health",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg",
    },
    {
      id: 3,
      subTitle: "Good Food",
      title: "Healthy milk for good health",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/23/23/50/cow-2436354_1280.jpg",
    },
    {
      id: 4,
      subTitle: "Good Food",
      title: "Experience them real agricultural",
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/09/25/16/18/agriculture-8275498_1280.jpg",
    },
  ];
  return (
    <div className="relative  mx-auto">
      <Caroussel autoSlide={true} autoSlideInterval={5000}>
        {slides.map((s) => (
          <div
            key={s.id}
            className="w-full h-[400px] flex justify-center items-center relative"
          >
            <img
              className="w-full h-full object-cover object-center brightness-50"
              src={s.imageUrl}
              alt={s.title}
            />
            <div className="absolute inset-0 mx-4 flex flex-col justify-center items-start capitalize font-Montserrat">
              <h3 className="text-white text-sm font-light">{s.subTitle}</h3>
              <p className="text-white text-4xl font-extrabold mt-2 mb-10">
                {s.title}
              </p>
              <button className=" bg-white text-green-600 text-base font-bold capitalize px-8 py-5 rounded-3xl">
                Read more
              </button>
            </div>
            <div className=" absolute my-6 mx-4 bottom-0 right-0 flex items-center justify-center">
              <div className="h-12 w-20 bg-white p-2 rounded-lg">
                <img
                  className=" object-cover object-center w-full h-full rounded-lg"
                  src="https://cdn.pixabay.com/photo/2024/04/08/14/09/nature-8683570_1280.jpg"
                  alt=""
                />
              </div>
              <div className="h-12 w-20 bg-white p-2 ml-5 rounded-lg">
                <img
                  className=" object-cover object-center w-full h-full rounded-lg"
                  src="https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565_1280.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </Caroussel>
    </div>
  );
}
