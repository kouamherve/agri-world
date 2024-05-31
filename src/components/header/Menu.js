import { Link } from "react-router-dom";

export default function Menu({ isShow }) {
  return (
    <div
      className={`${
        isShow ? "block" : "hidden lg:flex items-center justify-center"
      } w-full mt-5 p-4 font-bold text-black md:p-8 lg:p-0 lg:mt-0 lg:ml-14`}
    >
      <ul className="flex flex-col items-center gap-6 text-lg lg:flex-row lg:gap-7 lg:text-base">
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
