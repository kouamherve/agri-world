import { GiCheckMark } from "react-icons/gi";

export default function Check({ service }) {
  return (
    <div className="flex items-center gap-2 md:gap-4 lg:text-gray-800/90">
      <div className=" bg-secondary p-2 size-6 rounded-full md:size-7">
        <GiCheckMark className=" text-[10px] md:text-[12px]" />
      </div>
      <span className="  text-base font-medium lg:font-bold">{service}</span>
    </div>
  );
}
