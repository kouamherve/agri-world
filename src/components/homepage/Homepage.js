import React from "react";
import Caroussel from "../Caroussel";
import HomepageCard from "./HomepageCard";
import { slides } from "./Data";

export default function Homepage() {
  return (
    <div className="relative  mx-auto">
      <Caroussel autoSlide={true} autoSlideInterval={5000}>
        {slides.map((slide) => (
          <HomepageCard slide={slide} />
        ))}
      </Caroussel>
    </div>
  );
}
