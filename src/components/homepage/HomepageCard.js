import Button from "../../reusable-ui/Button";
import HomepageMiniCard from "./HomepageMiniCard";

export default function HomepageCard({ slide }) {
  return (
    <div className="w-full h-[345px] flex justify-center items-center relative sm:h-[520px] lg:h-screen">
      <img
        className="w-full h-full object-cover object-top brightness-[0.4] sm:object-bottom md:object-center"
        src={slide.imageUrl}
        alt={slide.title}
      />
      <div className="absolute inset-0 mx-4 flex flex-col justify-center items-start capitalize font-Montserrat sm:mx-16 md:mx-8 lg:mx-14 lg:-translate-y-14 xl:mx-36 2xl:mx-52">
        <h3 className="text-white text-sm mb-2 font-light xm:text-base md:text-lg">
          {slide.subTitle}
        </h3>
        <p className="text-white text-[32px] leading-snug font-extrabold mb-6 sm:mb-3 sm:pr-12 sm:text-[40px] md:text-[55px] sm:leading-normal md:pr-10 md:mb-8 md:mt-2 lg:pr-14 xl:text-7xl xl:pr-32">
          {slide.title}
        </p>
        <Button className="bg-white mt-1 text-primary hover:text-white text-base border border-white px-5 py-3 xs:px-6 xs:py-4 xs:text-sm xm:px-8 xm:py-3 ss:mt-4 ss:px-10 ss:py-3.5 sm:px-9 sm:py-3.5 sm:text-base md:px-12 md:py-4 md:text-base lg:px-10 lg:py-3 lg:mt-3 xl:px-12 xl:py-4">
          Read more
        </Button>
      </div>
      <div className=" absolute my-4 mx-2 bottom-0 right-0 flex items-center justify-center xm:mb-8 ss:mb-6 sm:mx-4 sm:mb-8 md:mx-4 lg:mx-8 lg:mb-20">
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
