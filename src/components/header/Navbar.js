import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Button from "../../reusable-ui/Button";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className="z-50 fixed top-0 left-0 right-0 px-4 py-3 bg-white font-Montserrat w-full flex flex-wrap items-center justify-between shadow overflow-x-hidden sm:px-16 sm:py-5 lg:flex-nowrap lg:gap-14 lg:px-12 xl:px-36 2xl:px-52">
      <div>
        <Link to="#">
          <h1 className=" text-2xl text-black font-bold sm:text-3xl lg:text-nowrap">
            Agri-<span className=" text-primary">world</span>
          </h1>
        </Link>
      </div>
      <div
        onClick={() => setIsShow(!isShow)}
        className="text-[34px] text-gray-700 cursor-pointer flex items-center gap-5 md:text-4xl lg:hidden"
      >
        <MdDarkMode className=" text-2xl md:text-[26px] p-0" />
        {isShow ? <AiOutlineClose /> : <IoMenu />}
      </div>
      <Menu isShow={isShow} />
      <div className=" hidden lg:flex items-center justify-between gap-4 ">
        <Button className="px-10 py-3.5 text-nowrap bg-primary text-white">
          Free Quote
        </Button>
        <MdDarkMode className=" text-2xl md:text-[26px] text-gray-600" />
      </div>
    </nav>
  );
}
