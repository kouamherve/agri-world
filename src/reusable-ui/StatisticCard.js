import React from "react";

export default function StatisticCard({ number, title }) {
  return (
    <div className=" font-Montserrat mx-4 sm:mx-16">
      <div className="text-center ">
        <span className=" text-primary text-4xl font-extrabold">{number}</span>
        <h2 className=" text-gray-800 mt-3 text-lg capitalize font-light sm:text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
