import { Link } from "react-router-dom";

export default function Menu({ isShow }) {
  return (
    <div
      className={`${
        isShow ? "block" : "hidden"
      } w-full p-4 font-bold text-black md:h-[350px]`}
    >
      <ul className="flex flex-col items-center gap-4 text-lg md:gap-8">
        <Link>
          <li className=" text-primary">Home</li>
        </Link>
        <Link>
          <li className=" hover:text-primary">About</li>
        </Link>
        <Link>
          <li className=" hover:text-primary">Services</li>
        </Link>
        <Link>
          <li className=" hover:text-primary">Gallery</li>
        </Link>
        <Link>
          <li className=" hover:text-primary">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
