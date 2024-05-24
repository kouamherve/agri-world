import React from "react";
import Caroussel from "../Caroussel";
import HomepageCard from "./HomepageCard";
import { slides } from "./Data";
import About from "./About";
import WhatWeDo from "./WhatWeDo";
import BeforeAndAfter from "./BeforeAndAfter";
import HealthyFood from "./HealthyFood";
import Statistic from "./Statistic";

export default function Homepage() {
  return (
    <div className=" bg-white max-w-md mx-auto pt-14 overflow-hidden">
      <Caroussel autoSlide={true} autoSlideInterval={5000}>
        {slides.map((slide) => (
          <HomepageCard key={slide.id} slide={slide} />
        ))}
      </Caroussel>
      <About />
      <WhatWeDo />
      <BeforeAndAfter />
      <HealthyFood />
      <Statistic />
    </div>
  );
}
