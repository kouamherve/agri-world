import React from "react";

export default function Button({ className, children }) {
  return (
    <button
      className={`${className} text-[15px] font-bold capitalize rounded-full shadow hover:bg-transparent`}
    >
      {children}
    </button>
  );
}
