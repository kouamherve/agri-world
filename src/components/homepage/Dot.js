import React from "react";

export default function Dot({ clients, current, setCurrent }) {
  return (
    <div className="absolute -bottom-0 left-0 right-0 sm:hidden">
      <div className=" flex items-center justify-center gap-2">
        {clients.map((_, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={i}
            className={` my-4 transition-all size-2 bg-violet-950 rounded-full cursor-pointer ${
              current === i ? "p-2" : "bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
