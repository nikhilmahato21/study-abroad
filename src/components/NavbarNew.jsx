import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const NavbarNew = () => {
  return (
    <nav className="  h-16  bg-baseGrey ">
      <div className="w-full px-3 md:px-10  mx-auto   py-1   flex items-center   justify-between">
        {/* DROPDOWN */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost  ">
            <FaBarsStaggered className="h-6 w-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            <NavLinks />
          </ul>
        </div>
        {/* LOGO */}
        <div className="flex h-16 w-44  ">
          <img
            src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1723715568/destiny-euro/Destiny_Euro_logo_new_smplgg.png"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>

        <div className=" hidden lg:flex items-center  ">
          <ul className="flex space-x-6 font-normal font-poppins  ">
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
