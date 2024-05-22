import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className=" fixed px-4 py-1 bg-white font-Montserrat w-full flex flex-wrap items-center justify-between  shadow overflow-x-hidden">
      <div>
        <Link to="#">
          <h1 className=" text-2xl font-bold">
            Agri-<span className=" text-green-600">world</span>
          </h1>
        </Link>
      </div>
      <div
        onClick={() => setIsShow(!isShow)}
        className="p-2 text-3xl cursor-pointer fill-current "
      >
        {isShow ? <AiOutlineClose /> : <CiMenuBurger />}
      </div>
      <div className={`${isShow ? "block" : "hidden"} w-full p-4 font-bold`}>
        <ul className="flex flex-col items-center gap-4">
          <Link>
            <li>Home</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Services</li>
          </Link>
          <Link>
            <li>Gallery</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
