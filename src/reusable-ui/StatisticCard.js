import React from "react";

export default function StatisticCard({ number, title }) {
  return (
    <div className=" font-Montserrat mx-4 sm:mx-14 md:mx-0 lg:mx-0">
      <div className="text-center sm:text-start md:text-center">
        <span className=" text-primary text-4xl font-extrabold md:text-[40px] lg:text-5xl">
          {number}
        </span>
        <h2 className=" text-gray-800 mt-3 text-lg capitalize font-light lg:text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
