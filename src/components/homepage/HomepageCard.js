import Button from "../../reusable-ui/Button";
import HomepageMiniCard from "./HomepageMiniCard";

export default function HomepageCard({ slide }) {
  return (
    <div className="w-full h-[345px] flex justify-center items-center relative sm:h-[520px] md:h-[640px] lg:h-screen">
      <img
        className="w-full h-full object-cover object-top brightness-[0.4] sm:object-bottom md:object-center"
        src={slide.imageUrl}
        alt={slide.title}
      />
      <div className="absolute inset-0 mx-4 flex flex-col justify-center items-start capitalize font-Montserrat sm:mx-14 md:mx-20 lg:mx-14 lg:mt-4 xl:mx-36 xl:mt-0 xl:-top-32 2xl:mx-[266px] 3xl:mx-[710px]">
        <h3 className="text-white text-sm mb-2 font-light sm:text-base md:text-lg md:mb-0 xl:text-lg">
          {slide.subTitle}
        </h3>
        <p className="text-white text-[31px] font-extrabold mb-5 sm:text-[40px] md:text-5xl md:leading-snug lg:mb-8 lg:max-w-2xl xl:text-7xl xl:max-w-3xl xl:mt-2 xl:leading-tight 2xl:text-[74px] 3xl:max-w-9xl">
          {slide.title}
        </p>
        <Button className="bg-white mt-1 text-primary hover:text-white text-base border border-white px-5 py-3 sm:px-8 md:px-10 md:py-3.5">
          Read more
        </Button>
      </div>
      <div className=" absolute my-4 mx-2 bottom-0 right-0 flex items-center justify-center sm:mb-8 sm:mx-6 xl:mb-20 2xl:mx-10 3xl:mb-24">
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
