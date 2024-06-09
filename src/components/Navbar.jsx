import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-baseGrey">
      <div className="navbar align-elememt">
        <div className="navbar-start">
          <NavLink to="/" className="hidden lg:flex  text-3xl items-center ">
            Logo
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200">
                nav links
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal"> nav links</ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/" className="flex lg:hidden  text-3xl items-center ">
            Logo
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
