import React from "react";

export default function Button({ className, title }) {
  return (
    <button
      className={`${className} text-[15px] font-bold capitalize rounded-3xl shadow`}
    >
      {title}
    </button>
  );
}
