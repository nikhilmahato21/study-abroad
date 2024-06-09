import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar/>
      <section className="align-element py-20">
      <Outlet />
      </section>
      
    </>
  );
};

export default HomeLayout;
