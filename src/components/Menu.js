import { Link } from "react-router-dom";

export default function Menu({ isShow }) {
  return (
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
  );
}
