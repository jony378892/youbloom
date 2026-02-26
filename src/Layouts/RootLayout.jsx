import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <Outlet />
    </div>
  );
}
