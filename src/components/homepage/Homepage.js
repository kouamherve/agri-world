import React from "react";
import Caroussel from "../Caroussel";
import HomepageCard from "./HomepageCard";
import { slides } from "./Data";

export default function Homepage() {
  return (
    <div className=" max-w-md mx-auto pt-14">
      <Caroussel autoSlide={true} autoSlideInterval={5000}>
        {slides.map((slide) => (
          <HomepageCard key={slide.id} slide={slide} />
        ))}
      </Caroussel>
    </div>
  );
}
