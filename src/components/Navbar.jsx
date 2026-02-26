import { Link } from "react-router";
import useUser from "../hooks/useUser";

export default function Navbar() {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex px-5 xl:px-0 py-3 items-center justify-between border-b border-gray-300 mx-auto max-w-7xl">
      <Link to="/">
        <h2 className="text-xl font-bold text-black rounded-lg  ">
          <span className="text-blue-600">You</span> Bloom
        </h2>
      </Link>
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
