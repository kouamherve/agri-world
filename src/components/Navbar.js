import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className=" px-4 py-2 flex items-center justify-between font-Montserrat shadow">
      <div>
        <h1 className=" text-2xl font-bold">
          Agri-<span className=" text-green-600">world</span>
        </h1>
      </div>
      <div className="p-2 text-3xl ">
        <CiMenuBurger />
      </div>
    </div>
  );
}
