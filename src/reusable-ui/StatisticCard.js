import React from "react";

export default function StatisticCard({ number, title }) {
  return (
    <div className=" font-Montserrat mx-4 sm:mx-16 md:mx-10 lg:mx-0">
      <div className="text-center ">
        <span className=" text-primary text-4xl font-extrabold md:text-5xl">
          {number}
        </span>
        <h2 className=" text-gray-800 mt-3 text-lg capitalize font-light md:text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
