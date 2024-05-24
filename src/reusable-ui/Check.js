import { GiCheckMark } from "react-icons/gi";

export default function Check({ service }) {
  return (
    <div className="flex items-center gap-4">
      <div className=" bg-green-100/50 p-2 size-8 rounded-full">
        <GiCheckMark className=" text-sm" />
      </div>
      <span className=" text-sm font-bold tracking-wider">{service}</span>
    </div>
  );
}
