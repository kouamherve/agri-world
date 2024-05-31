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
      <div className="absolute inset-0 mx-4 flex flex-col justify-center items-start capitalize font-Montserrat sm:mx-14 md:mx-20 lg:mx-14 lg:mt-4">
        <h3 className="text-white text-sm mb-2 font-light sm:text-base md:text-lg md:mb-0">
          {slide.subTitle}
        </h3>
        <p className="text-white text-[32px] leading-snug font-extrabold mb-6 sm:text-[40px] md:text-5xl md:leading-snug lg:mb-8 lg:max-w-2xl">
          {slide.title}
        </p>
        <Button className="bg-white mt-1 text-primary hover:text-white text-base border border-white px-5 py-3 sm:px-8 md:px-10 md:py-4">
          Read more
        </Button>
      </div>
      <div className=" absolute my-4 mx-2 bottom-0 right-0 flex items-center justify-center sm:mb-8 sm:mx-6">
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
