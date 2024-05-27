import { GiCheckMark } from "react-icons/gi";

export default function Check({ service }) {
  return (
    <div className="flex items-center gap-3">
      <div className=" bg-secondary p-2 size-8 rounded-full max-[320px]:size-6">
        <GiCheckMark className=" text-sm max-[320px]:text-xs" />
      </div>
      <span className=" text-base font-bold max-[320px]:text-[15px]">
        {service}
      </span>
    </div>
  );
}
