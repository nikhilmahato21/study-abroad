import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({ service, index }) => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md  p-4  lg:h-60 relative hover:scale-105 ">
      <div className="flex flex-col  mb-4">
        <span className="w-14 mb-1 md:mb-6 mx-2">
          <img src={service.icon} alt="" />
        </span>
        <h3
          className={`text-xl font-bold text-gray-800 mb-3 font-poppins ${
            isopen && "hidden"
          }`}
        >
          {service.heading}
        </h3>
      </div>
      <p
        className={`text-gray-600 font-bold font-poppins text-center text-wrap  px-10 md:px-0  ${
          !isopen && "hidden"
        }`}
      >
        {service.description}
      </p>
      <div className="mt-4 absolute bottom-1 left-1">
        <span
          className="inline-block   hover:scale-150  text-graphite font-bold py-2 px-4 "
          onClick={() => setIsOpen(!isopen)}
        >
          <FaLongArrowAltRight size={20} className=" shadow-xl" />
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
