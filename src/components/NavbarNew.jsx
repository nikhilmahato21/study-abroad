import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const NavbarNew = () => {
  return (
    <nav className="  h-16  bg-baseGrey ">
      <div className="container  mx-auto px-3  py-4 flex items-center   justify-between">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl capitalize font-light tracking-wide font-poppins  text-graphite ">
            logo
          </h1>
        </div>

        <div className=" hidden lg:flex items-center  ">
          <ul className="flex space-x-6 font-normal ">
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
