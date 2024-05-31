import React from "react";
import Button from "../../reusable-ui/Button";

export default function GetUpdated() {
  const image =
    "https://cdn.pixabay.com/photo/2020/06/23/06/45/dji-5331570_1280.jpg";
  return (
    <div
      className=" py-20 text-white font-Montserrat capitalize bg-cover bg-center bg-black/65 bg-blend-darken sm:py-24 md:py-[110px] lg:py-24"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" mx-4 sm:mx-16 md:mx-10 lg:mx-14 lg:ml-96">
        <h1 className=" text-3xl font-bold sm:text-4xl md:leading-tight">
          Get update from <br className=" hidden md:block" />
          anywhere
        </h1>
        <p className=" text-lg mt-1 sm:tracking-wider md:mt-4">
          Don't miss out on the good news!
        </p>
        <form
          action=""
          className="mt-8 mb-4 items-center justify-between gap-4 md:flex"
        >
          <input
            className=" w-full rounded-full py-3 px-4 placeholder-gray-500 text-gray-800 mb-4 md:mb-0 md:py-3.5 md:w-3/4"
            type="text"
            placeholder="Enter your Email..."
          />
          <Button className="text-white hover:text-primary text-base bg-primary border border-primary py-3 w-full sm:text-lg md:text-[16px] md:w-1/4 lg:text-sm lg:py-4">
            Subscribe
          </Button>
        </form>
        <p className=" text-[15px] font-light">
          By subscribing this form, you agree to the{" "}
          <span className=" text-primary font-medium">privacy policy </span>and{" "}
          <span className=" text-primary font-medium">terms of use</span>.
        </p>
      </div>
    </div>
  );
}
