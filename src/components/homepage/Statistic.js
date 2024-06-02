import React from "react";
import StatisticCard from "../../reusable-ui/StatisticCard";

export default function Statistic() {
  return (
    <div className=" bg-secondary py-16 grid grid-cols-2 gap-y-14 px-4 sm:px-14 md:gap-x-12 md:flex md:items-center md:justify-center xl:px-36 xl:py-28 xl:justify-between 2xl:px-[266px]">
      <StatisticCard number="130" title="custom products" />
      <StatisticCard number="40" title="our farms" />
      <StatisticCard number="312" title="happy customers" />
      <StatisticCard number="4" title="awards" />
    </div>
  );
}
