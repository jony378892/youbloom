import { Link } from "react-router";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex px-5 py-3 items-center justify-between border-b border-gray-300 shadow-lg sticky">
      <Link to="/">
        <h2 className="text-xl font-bold text-white bg-black/90 rounded-lg  p-2">
          <span className="text-red-500">You</span> Bloom
        </h2>
      </Link>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/login">
              <Button text="Login"></Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
