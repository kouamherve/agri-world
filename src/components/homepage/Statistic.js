import React from "react";
import StatisticCard from "../../reusable-ui/StatisticCard";

export default function Statistic() {
  return (
    <div className=" bg-violet-100/50 py-14 grid grid-cols-2 gap-y-8">
      <StatisticCard number="130" title="custom products" />
      <StatisticCard number="40" title="our farms" />
      <StatisticCard number="312" title="happy customers" />
      <StatisticCard number="4" title="awards" />
    </div>
  );
}
