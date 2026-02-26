import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-105px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
