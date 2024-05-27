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
        <h4 className=" text-sm text-primary font-medium">
          Here's what they have to say
        </h4>
        <h2 className=" text-[28px] font-bold mt-0 max-[320px]:text-[26px] max-[425px]:text-3xl">
          Our clients do the talking
        </h2>
      </div>
      <div className=" mx-4">
        <Carousel autoSlide={false} autoSlideInterval={5000}>
          {clients.map((client) => (
            <div
              key={client.name}
              className=" bg-secondary px-8 py-5 mt-10 rounded-2xl"
            >
              <div>
                <FaComment className=" text-5xl text-primary ml-[80%]" />
                <p className=" leading-7 text-justify text-gray-600 font-normal my-4 max-[320px]:text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  veritatis explicabo illo.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className=" size-20 object-cover object-top rounded-full"
                  src={client.image}
                  alt=""
                />
                <h2 className=" font-bold text-sm max-[425px]:text-base">
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
