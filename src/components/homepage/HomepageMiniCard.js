import React from "react";

export default function HomepageMiniCard({ image }) {
  return (
    <div className="h-12 w-20 bg-white p-2 ml-4 rounded-lg">
      <img
        className=" object-cover object-center w-full h-full rounded-lg"
        src={image}
        alt=""
      />
    </div>
  );
}
