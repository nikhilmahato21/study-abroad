import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarNew from "../components/NavbarNew";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <>
      <NavbarNew />
      <section className="">
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default HomeLayout;
