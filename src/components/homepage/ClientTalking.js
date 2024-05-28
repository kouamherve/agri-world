import { FaComment } from "react-icons/fa";
import Carousel from "./Carousel";

export default function ClientTalking() {
  const clients = [
    {
      name: "Divine Takam",
      image:
        "https://cdn.pixabay.com/photo/2015/02/08/18/38/woman-628928_1280.jpg",
    },
    {
      name: "Saco Ibrahim",
      image:
        "https://cdn.pixabay.com/photo/2017/08/07/20/21/man-2607437_1280.jpg",
    },

    {
      name: "Cabongo Couple",
      image:
        "https://cdn.pixabay.com/photo/2021/11/07/21/19/couple-6777917_1280.jpg",
    },
  ];

  return (
    <div className=" py-14 font-Montserrat">
      <div className=" capitalize text-center px-6">
        <h4 className=" text-sm text-primary font-medium sm:text-base">
          Here's what they have to say
        </h4>
        <h2 className=" text-[26px] leading-8 mt-1 font-bold sm:text-4xl">
          Our clients do the talking
        </h2>
      </div>
      <div className=" mx-4 sm:mx-16">
        <Carousel autoSlide={false} autoSlideInterval={5000}>
          {clients.map((client) => (
            <div
              key={client.name}
              className=" bg-secondary px-8 py-5 mt-10 rounded-2xl sm:px-12"
            >
              <div>
                <FaComment className=" text-4xl text-primary ml-[80%]" />
                <p className="text-justify text-gray-600 font-normal my-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  veritatis explicabo illo.
                </p>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <img
                  className=" size-16 object-cover object-top rounded-full"
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
