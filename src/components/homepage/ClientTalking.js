import { RiDoubleQuotesL } from "react-icons/ri";
import Carousel from "./Carousel";
import { clients } from "./Data";

export default function ClientTalking() {
  return (
    <div className=" py-14 font-Montserrat">
      <div className=" capitalize text-center px-6 mb-6">
        <h4 className=" text-sm text-primary font-medium sm:text-base">
          Here's what they have to say
        </h4>
        <h2 className=" text-[26px] leading-8 mt-1 font-bold sm:text-4xl">
          Our clients do the talking
        </h2>
      </div>
      <div className=" mx-4 sm:mx-16 md:mx-10 ">
        <Carousel autoSlide={false} autoSlideInterval={5000}>
          {clients.map((client) => (
            <div
              key={client.name}
              className=" bg-secondary mt-10 px-8 pt-6 pb-10 rounded-2xl sm:px-12 md:snap-center"
            >
              <div>
                <RiDoubleQuotesL className=" text-5xl text-primary " />
                <p className="text-justify text-gray-600 font-normal mt-2 mb-4 md:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  veritatis explicabo illo.
                </p>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  className=" size-16 object-cover object-top rounded-full md:shrink-0"
                  src={client.image}
                  alt=""
                />
                <h2 className=" font-bold text-base sm:text-lg">
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
