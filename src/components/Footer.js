import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import { BsTelephoneFill } from "react-icons/bs";
import { RiCopyrightLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-black text-white font-Montserrat pt-14 overflow-x-hidden">
      <div className="mx-4">
        <div className="">
          <div>
            <h1 className=" text-xl font-extrabold">About us</h1>
            <p className=" text-gray-500 my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              laboriosam, inventore cumque aliquam natus voluptatibus
              praesentium minima ducimus rem eius quod temporibus dicta
              consectetur.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <FaFacebookF className=" bg-gray-900 p-2 rounded-full text-4xl cursor-pointer " />
            <FaInstagram className=" bg-gray-900 p-2 rounded-full text-4xl cursor-pointer " />
            <FaTwitter className=" bg-gray-900 p-2 rounded-full text-4xl cursor-pointer " />
            <FaLinkedinIn className=" bg-gray-900 p-2 rounded-full text-4xl cursor-pointer " />
          </div>
        </div>
        <div className="mt-8">
          <h1 className=" text-xl font-extrabold mb-4">Useful links</h1>
          <ul className="text-gray-500 flex flex-col gap-4">
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
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="mt-8">
          <h1 className=" text-xl font-extrabold mb-4">Services</h1>
          <ul className="text-gray-500 flex flex-col gap-4">
            <Link>
              <li>Healthy Milk</li>
            </Link>
            <Link>
              <li>Organic Food</li>
            </Link>
            <Link>
              <li>Fresh Fruits</li>
            </Link>
            <Link>
              <li>Tree Planting</li>
            </Link>
            <Link>
              <li>Gardening</li>
            </Link>
          </ul>
        </div>
        <div className="mt-8 mb-14">
          <h1 className=" text-xl font-extrabold mb-4">Contact Us</h1>
          <ul className="text-gray-500 flex flex-col gap-4">
            <Link>
              <li className="flex items-center gap-2">
                <PiMapPinFill className=" text-white" />
                <span>Agriworld, #888 Kennedy rd Yaounde</span>
              </li>
            </Link>
            <Link>
              <li className="flex items-center gap-2">
                <BsTelephoneFill className=" text-white" />
                <span>+ (237)-690-55-63-39</span>
              </li>
            </Link>
            <Link>
              <li className="flex items-center gap-2">
                <MdEmail className=" text-white" />
                <span>agriworld237@gmail.com</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className=" bg-neutral-900 p-8 w-full text-center text-gray-600 font-Montserrat">
        <div className=" flex items-center justify-center gap-1">
          <div className="flex flex-col items-center justify-center">
            <span className="flex items-center gap-1">
              <RiCopyrightLine />
              2024 agriworld.
            </span>
            <span className=" text-sm">All right reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
