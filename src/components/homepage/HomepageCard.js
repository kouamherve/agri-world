import HomepageMiniCard from "./HomepageMiniCard";

export default function HomepageCard({ slide }) {
  return (
    <div className="w-full h-[345px] flex justify-center items-center relative">
      <img
        className="w-full h-full object-cover object-center brightness-50"
        src={slide.imageUrl}
        alt={slide.title}
      />
      <div className="absolute inset-0 mx-4 flex flex-col justify-center items-start capitalize font-Montserrat">
        <h3 className="text-white text-base font-light">{slide.subTitle}</h3>
        <p className="text-white text-4xl font-extrabold mt-2 mb-6">
          {slide.title}
        </p>
        <button className=" bg-white text-green-600 text-base font-bold capitalize px-6 py-4 rounded-3xl">
          Read more
        </button>
      </div>
      <div className=" absolute m-4 bottom-0 right-0 flex items-center justify-center">
        <HomepageMiniCard image="https://cdn.pixabay.com/photo/2024/04/08/14/09/nature-8683570_1280.jpg" />
        <HomepageMiniCard image="https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565_1280.jpg" />
      </div>
    </div>
  );
}
