import React from "react";

export default function StatisticCard({ number, title }) {
  return (
    <div className=" font-Montserrat mx-4">
      <div className="text-center">
        <span className=" text-green-600 text-3xl font-extrabold">
          {number}
        </span>
        <h2 className=" text-gray-500 text-xl capitalize font-light text-nowrap">
          {title}
        </h2>
      </div>
    </div>
  );
}
