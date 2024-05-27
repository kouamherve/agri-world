import React from "react";
import Button from "../../reusable-ui/Button";

export default function GetUpdated() {
  const image =
    "https://cdn.pixabay.com/photo/2020/06/23/06/45/dji-5331570_1280.jpg";
  return (
    <div
      className=" py-14 text-white font-Montserrat capitalize bg-cover bg-center bg-black/65 bg-blend-darken"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" mx-4 sm:mx-16">
        <h1 className=" text-3xl font-semibold">Get update from anywhere</h1>
        <p className=" text-lg tracking-wider mt-2">
          Don't miss out on the good news!
        </p>
        <form action="" className="my-6">
          <input
            className=" w-full rounded-full py-3 px-4 placeholder-gray-500 text-gray-800 mb-4"
            type="text"
            placeholder="Enter your Email..."
          />
          <Button className="text-white hover:text-primary text-lg bg-primary border border-primary py-3 w-full max-[320px]:text-base">
            Subscribe
          </Button>
        </form>
        <p className=" text-[15px] tracking-wider font-medium max-[320px]:text-[13px]">
          By subscribing this form, you agree to the{" "}
          <span className=" text-green-500">privacy policy </span>and{" "}
          <span className=" text-green-500">terms of use</span>.
        </p>
      </div>
    </div>
  );
}
