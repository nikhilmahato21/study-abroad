import React, { useState } from "react";
import S1 from "../assets/service-1.png";
import S2 from "../assets/service-2.png";
import S3 from "../assets/service-3.png";
import S4 from "../assets/service-4.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  const [isopen, setIsOpen] = useState(true);
  return (
    <section className="bg-baseGrey p-4 md:p-16  ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:flex ">
          <div className="md:w-1/2 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              OUR SERVICES
            </h2>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 font-poppins">
              Your Career Deserves <br /> the Best Quality.
            </h1>
          </div>
          <div className="md:w-1/2   flex  justify-center items-center p-4">
            <p className="text-center text-xl md:max-w-96 font-poppins text-graphite">
              Discover Our Comprehensive Services Designed to Ensure Your
              Success Abroad
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md  p-4  lg:h-60 relative ">
            <div className="flex flex-col  mb-4">
              <span className="w-14 mb-6 mx-2">
                <img src={S1} alt="" />
              </span>
              <h3
                className={`text-xl font-bold text-gray-800 mb-3 font-poppins ${
                  isopen && "hidden"
                }`}
              >
                Personalized Program Matching
              </h3>
            </div>
            <p
              className={`text-gray-600 font-bold font-poppins text-center  ${
                !isopen && "hidden"
              }`}
            >
              Tailored advice to help you choose the best program for your career goals.
            </p>
            <div className="mt-4 absolute bottom-1 left-1">
              <span
                className="inline-block   focus:scale-150  text-graphite font-bold py-2 px-4 "
                onClick={() => setIsOpen(!isopen)}
              >
                <FaLongArrowAltRight size={20} className=" shadow-xl" />
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4  lg:h-60 relative">
            <div className="flex flex-col mb-4">
              <span className="w-14 mb-4 mx-2">
                <img src={S2} alt="" />
              </span>
              <h3
                className={`text-xl font-bold text-gray-800 mb-3 font-poppins ${
                  isopen && "hidden"
                }`}
              >
                Comprehensive Application Assistance
              </h3>
            </div>
            <p
              className={`text-gray-600 font-bold font-poppins text-center  ${
                !isopen && "hidden"
              }`}
            >
              Step-by-step guidance through the entire application process.
            </p>
            <div className="mt-1 absolute bottom-1 left-1">
              <span
                className="inline-block   hover:scale-150  text-graphite font-bold py-2 px-4 "
                onClick={() => setIsOpen(!isopen)}
              >
                <FaLongArrowAltRight size={20} />
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 lg:h-60 relative">
            <div className="flex flex-col mb-4">
              <span className="w-14   mx-2">
                <img src={S3} alt="" />
              </span>
              <h3
                className={`text-xl font-bold text-gray-800 mb-2 font-poppins ${
                  isopen && "hidden"
                }`}
              >
                Visa and Immigration Support
              </h3>
            </div>
            <p
              className={`text-gray-600 font-bold font-poppins text-center  ${
                !isopen && "hidden"
              }`}
            >
              Expert assistance to secure your student visa and ensure a smooth
              immigration process.
            </p>
            <div className="mt-4 absolute bottom-1 left-1">
              <span
                className="inline-block   hover:scale-150  text-graphite font-bold py-2 px-4 "
                onClick={() => setIsOpen(!isopen)}
              >
                <FaLongArrowAltRight size={20} />
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 lg:h-60 relative">
            <div className="flex flex-col mb-4">
              <span className="w-14 mb-2 mx-2">
                <img src={S4} alt="" />
              </span>
              <h3
                className={`text-xl font-bold text-gray-800 mb-3 font-poppins ${
                  isopen && "hidden"
                }`}
              >
                Pre-Departure and Arrival Support
              </h3>
            </div>
            <p
              className={`text-gray-600 font-bold font-poppins text-center  ${
                !isopen && "hidden"
              }`}
            >
              Helping you settle in and feel at home in your new country.
            </p>
            <div className="mt-4 absolute bottom-1 left-1">
              <span
                className="inline-block   hover:scale-150  text-graphite font-bold py-2 px-4 "
                onClick={() => setIsOpen(!isopen)}
              >
                <FaLongArrowAltRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
