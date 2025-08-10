import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarNew from "../components/NavbarNew";
import Footer from "../components/Footer";
import CallButton from "../components/CallButton";

const HomeLayout = () => {
  return (
    <>
      <NavbarNew />
      <section className="">
        <Outlet />
        <Footer />
        <CallButton />
      </section>
    </>
  );
};

export default HomeLayout;
