import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo and Social Media Icons */}
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <h1 className="text-3xl font-bold mb-4">Destiny Euro</h1>
            <div className="flex space-x-4 text-gray-600">
              <FaFacebookF className="h-6 w-6" />
              <FaTwitter className="h-6 w-6" />
              <FaInstagram className="h-6 w-6" />
              <FaEnvelope className="h-6 w-6" />
            </div>
          </div>
          {/* Support Links */}
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <h2 className="text-xl  text-blue-600 mb-4 font-poppins font-light">Support</h2>
            <ul className="text-gray-600 font-poppins font-medium">
              <li className="mb-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Registration</a>
              </li>
            </ul>
          </div>
          {/* Company Links */}
          <div className="flex flex-col  lg:items-start mb-6 lg:mb-0">
            <h2 className="text-xl  text-blue-600 mb-4 font-poppins font-light ">Company</h2>
            <ul className="text-gray-600 font-poppins font-medium">
              <li className="mb-2">
                <a href="#">About</a>
              </li>
              <li className="mb-2">
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Newsrooms</a>
              </li>
            </ul>
          </div>
          {/* Newsletter Sign-Up */}
          <div className="flex flex-col items-center lg:items-start ">
            <div className="text-grphite mb-4 flex items-center">
              <FaEnvelope className="h-6 w-6 mr-2" />
              <span className="font-poppins text-sm tracking-wide font-medium text-graphite">Stay up to date on the latest from company</span>
            </div>
            <form className="flex flex-col items-center lg:items-start w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="border-b-2 border-gray-300 font-poppins p-2 mb-2 w-full"
              />
              <button className="bg-blue-600 text-white py-2 px-4 rounded w-1/2 font-poppins ">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
