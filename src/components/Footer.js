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
    <div className=" bg-black ">
      <div className="text-footer font-Montserrat pt-14 overflow-x-hidden px-4 sm:px-14 lg:px-14 sm:pt-16 md:pt-20 lg:pt-24 xl:px-36 xl:py-28 2xl:px-[266px] 3xl:px-[710px]">
        <div>
          <div className=" sm:hidden md:block lg:hidden">
            <div>
              <h1 className=" text-xl text-white font-extrabold">About us</h1>
              <p className="my-4 text-[15px] sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                laboriosam, inventore cumque aliquam natus voluptatibus
                praesentium minima ducimus rem eius quod temporibus dicta
                consectetur.
              </p>
            </div>
            <div className="flex items-center gap-6 text-white">
              <FaFacebookF className=" bg-gray-900 p-2 rounded-full text-3xl cursor-pointer " />
              <FaInstagram className=" bg-gray-900 p-2 rounded-full text-3xl cursor-pointer " />
              <FaTwitter className=" bg-gray-900 p-2 rounded-full text-3xl cursor-pointer " />
              <FaLinkedinIn className=" bg-gray-900 p-2 rounded-full text-3xl cursor-pointer " />
            </div>
          </div>
          <div className=" sm:grid sm:grid-cols-2 sm:gap-y-8 sm:mb-16 md:grid-cols-3 md:my-10 lg:my-0 lg:grid-cols-4 lg:mb-24 xl:gap-x-0 xl:mb-0">
            <div className="hidden sm:block md:hidden lg:block">
              <div className="">
                <h1 className=" text-xl text-white font-extrabold lg:text-lg xl:text-2xl">
                  About us
                </h1>
                <p className="my-4 text-[15px] sm:text-base sm:pr-16 md:pr-0 lg:text-[15px] lg:pr-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  laboriosam, inventore cumque aliquam natus voluptatibus
                  praesentium minima ducimus rem eius quod temporibus dicta
                  consectetur.
                </p>
              </div>
              <div className="flex items-center gap-6 text-white lg:gap-4 xl:mt-10">
                <FaFacebookF className=" bg-gray-900 p-2 rounded-full text-3xl cursor-pointer lg:text-[28px] xl:text-4xl " />
                <FaInstagram className=" bg-gray-900 p-2 rounded-full text-3xl cursor-pointer lg:text-[28px] xl:text-4xl " />
                <FaTwitter className=" bg-gray-900 p-2 rounded-full text-3xl cursor-pointer lg:text-[28px] xl:text-4xl " />
                <FaLinkedinIn className=" bg-gray-900 p-2 rounded-full text-3xl cursor-pointer lg:text-[28px] xl:text-4xl " />
              </div>
            </div>
            <div className="mt-8 sm:mt-0 md:mt-4 lg:mt-0">
              <h1 className=" text-xl text-white font-extrabold mb-4 lg:text-lg xl:text-2xl">
                Useful links
              </h1>
              <ul className="text-footerLinks flex flex-col gap-4">
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
            <div className="mt-8 sm:mt-0 md:mt-4 lg:mt-0">
              <h1 className=" text-xl text-white font-extrabold mb-4 lg:text-lg xl:text-2xl">
                Services
              </h1>
              <ul className="text-footerLinks flex flex-col gap-4">
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
            <div className="mt-8 sm:mt-0 md:mt-4 mb-14 lg:mt-0 lg:mb-0">
              <h1 className=" text-xl text-white font-extrabold mb-4 lg:text-lg xl:text-2xl">
                Contact Us
              </h1>
              <ul className="text-footerLinks flex flex-col gap-4">
                <Link>
                  <li className="flex items-center gap-2">
                    <PiMapPinFill className=" text-white" />
                    <span className=" xl:text-nowrap">
                      Agriworld, #888 Kennedy rd YDE
                    </span>
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
        </div>
      </div>
      <div className=" bg-footerBg p-8 w-full text-center text-footer font-Montserrat sm:p-9 lg:p-10">
        <div className=" flex items-center justify-center gap-1">
          <div className="sm:flex gap-1 text-sm sm:text-base">
            <span className="flex items-center gap-1">
              <RiCopyrightLine />
              2024 Agriworld. Build with love
            </span>
            <span>
              by <span className=" text-footerLinks">Herve Kouam</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
