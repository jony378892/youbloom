import { Link } from "react-router";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user, handleLogout } = useAuth();

  return (
    <div className="flex px-5 xl:px-0 py-3 items-center justify-between border-b border-gray-300 mx-auto max-w-7xl">
      {/* Logo */}
      <Link to="/">
        <Logo />
      </Link>

      {/* Login and Logout button */}
      <nav>
        <ul className="flex gap-3">
          <li>
            {user?.isAuthenticated ? (
              <button
                className="bg-red-400 text-white rounded-md cursor-pointer py-2 px-5"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-blue-500 text-white rounded-md cursor-pointer py-2 px-5">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
