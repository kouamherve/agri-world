import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className=" z-50 fixed top-0 left-0 right-0 px-4 py-3 bg-white font-Montserrat w-full flex flex-wrap items-center justify-between  shadow overflow-x-hidden">
      <div>
        <Link to="#">
          <h1 className=" text-2xl font-extrabold">
            Agri-<span className=" text-green-600">world</span>
          </h1>
        </Link>
      </div>
      <div
        onClick={() => setIsShow(!isShow)}
        className="p-1 text-2xl cursor-pointer border-2 border-gray-500 rounded-lg "
      >
        {isShow ? (
          <AiOutlineClose className=" text-gray-500" />
        ) : (
          <CiMenuBurger className=" text-gray-500" />
        )}
      </div>
      <Menu isShow={isShow} />
    </nav>
  );
}
