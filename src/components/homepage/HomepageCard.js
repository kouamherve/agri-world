import Button from "../../reusable-ui/Button";
import HomepageMiniCard from "./HomepageMiniCard";

export default function HomepageCard({ slide }) {
  return (
    <div className="w-full h-[345px] flex justify-center items-center relative sm:h-[245px] md:h-[520px]">
      <img
        className="w-full h-full object-cover object-center brightness-50"
        src={slide.imageUrl}
        alt={slide.title}
      />
      <div className="absolute inset-0 mx-4 flex flex-col justify-center items-start capitalize font-Montserrat md:mx-8">
        <h3 className="text-white text-sm font-light md:text-base">
          {slide.subTitle}
        </h3>
        <p className="text-white text-4xl font-extrabold mt-0 mb-6 max-[320px]:text-3xl sm:mb-3 sm:pr-40 sm:text-5xl md:text-6xl md:pr-10 md:mb-8">
          {slide.title}
        </p>
        <Button className="bg-white text-green-600 hover:text-white text-base border border-white px-5 py-3 max-[320px]:px-4 max-[320px]:py-2 max-[320px]:text-sm sm:px-10 sm:py-3 sm:text-base md:px-12 md:py-4 md:text-base">
          Read more
        </Button>
      </div>
      <div className=" absolute my-4 mx-2 bottom-0 right-0 flex items-center justify-center sm:mx-4 md:mx-4 ">
        <HomepageMiniCard
          title={slide.titleMini1}
          image={slide.imageUrlMini1}
        />
        <HomepageMiniCard
          title={slide.titleMini2}
          image={slide.imageUrlMini2}
        />
      </div>
    </div>
  );
}
