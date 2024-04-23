import Footer from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layaout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layaout;
