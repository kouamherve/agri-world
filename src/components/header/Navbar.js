import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className=" z-50 fixed top-0 left-0 right-0 px-4 py-3 bg-white font-Montserrat w-full flex flex-wrap items-center justify-between shadow overflow-x-hidden md:px-10 md:py-4">
      <div>
        <Link to="#">
          <h1 className=" text-2xl font-extrabold md:text-3xl">
            Agri-<span className=" text-green-600">world</span>
          </h1>
        </Link>
      </div>
      <div
        onClick={() => setIsShow(!isShow)}
        className="text-[34px] cursor-pointer flex items-center gap-5 md:text-4xl"
      >
        <MdDarkMode className=" text-2xl md:text-[26px]" />
        {isShow ? <AiOutlineClose /> : <IoMenu />}
      </div>
      <Menu isShow={isShow} />
    </nav>
  );
}
