import { Link } from "react-router-dom";

export default function Menu({ isShow }) {
  return (
    <div
      className={`${
        isShow ? "block" : "hidden lg:block"
      } w-full p-4 font-bold text-gray-800`}
    >
      <ul className="flex flex-col items-center gap-4 text-lg lg:flex-row lg:text-base lg:gap-6">
        <Link>
          <li className=" text-green-700">Home</li>
        </Link>
        <Link>
          <li className=" hover:text-green-700">About</li>
        </Link>
        <Link>
          <li className=" hover:text-green-700">Services</li>
        </Link>
        <Link>
          <li className=" hover:text-green-700">Gallery</li>
        </Link>
        <Link>
          <li className=" hover:text-green-700">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
