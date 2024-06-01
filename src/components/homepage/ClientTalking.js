import { RiDoubleQuotesL } from "react-icons/ri";
import Carousel from "./Carousel";
import { clients } from "./Data";

export default function ClientTalking() {
  return (
    <div className=" py-14 px-4 font-Montserrat sm:px-14 sm:py-16 md:p-20 lg:px-14 lg:py-24 xl:px-36">
      <div className=" capitalize text-center px-6 mb-6">
        <h4 className=" text-sm text-primary font-medium sm:text-base">
          Here's what they have to say
        </h4>
        <h2 className=" text-[26px] text-black/85 leading-8 mt-1 font-bold sm:text-3xl md:text-4xl lg:mt-2 xl:text-[40px] xl:mt-2">
          Our clients do the talking
        </h2>
      </div>
      <div className="">
        <Carousel autoSlide={false} autoSlideInterval={5000}>
          {clients.map((client) => (
            <div
              key={client.name}
              className=" bg-secondary mt-6 px-8 pt-6 pb-10 rounded-2xl sm:py-2 sm:px-4 sm:snap-center md:px-3 lg:px-4 xl:p-10 xl:mt-8"
            >
              <div>
                <RiDoubleQuotesL className=" text-5xl text-primary xl:text-[52px]" />
                <p className=" text-[15px] text-justify text-gray-600 font-normal mt-2 mb-4 sm:text-start lg:text-sm xl:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  veritatis explicabo illo.
                </p>
              </div>
              <div className="flex items-center gap-4 md:gap-4 xl:gap-5">
                <img
                  className=" size-14 object-cover object-top rounded-full sm:size-16 md:shrink-0"
                  src={client.image}
                  alt=""
                />
                <h2 className=" font-bold text-base lg:text-lg">
                  {client.name}
                </h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
