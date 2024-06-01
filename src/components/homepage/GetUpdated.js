import React from "react";
import Button from "../../reusable-ui/Button";

export default function GetUpdated() {
  const image =
    "https://cdn.pixabay.com/photo/2023/09/25/16/18/agriculture-8275498_1280.jpg";
  return (
    <div
      className=" py-20 px-4 text-white font-Montserrat capitalize bg-cover bg-bottom bg-black/65 bg-blend-darken sm:py-24 sm:px-14 md:bg-center md:px-20 lg:px-14 xl:px-36 xl:py-28"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="lg:ml-96 xl:w-1/2 xl:translate-x-1/3">
        <h1 className=" text-3xl font-bold sm:text-[32px] md:text-4xl md:leading-tight xl:text-[38px]">
          Get update from <br className=" hidden md:block xl:hidden" />
          anywhere
        </h1>
        <p className=" text-lg mt-1 sm:tracking-wider md:mt-2">
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
          <Button className="text-white hover:text-primary text-base bg-primary border border-primary py-3 w-full sm:text-base md:text-[16px] md:w-1/4 lg:text-sm lg:py-4 xl:w-52 ">
            Subscribe
          </Button>
        </form>
        <p className=" text-[15px] font-light xl:font-medium xl:text-sm">
          By subscribing this form, you agree to the{" "}
          <span className=" text-primary font-medium">privacy policy </span>and{" "}
          <span className=" text-primary font-medium">terms of use</span>.
        </p>
      </div>
    </div>
  );
}
