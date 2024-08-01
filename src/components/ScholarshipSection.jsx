import React from "react";

import Icon1 from "../assets/grad-icon1.png";
import Icon2 from "../assets/grad-icon2.png";
import Icon3 from "../assets/grad-icon3.png";
import Icon4 from "../assets/grad-icon4.png";



const iconMapping = {
  1: Icon1,
  2: Icon2,
  3: Icon3,
  4:Icon4,
  
};

const ScholarshipSection = ({ scholarship }) => {
  return (
    <div className=" min-h-screen flex items-center justify-center p-2  pt-4 ">
      <div className=" lg:flex justify-center   p-2 max-w-6xl w-full gap-8 ">
        <div className="mb-10 lg:mb-0  lg:w-3/5    md:border-r-2 border-gray-300  flex flex-col justify-center items-center  gap-5">
          <div>
            <h1 className="text-3xl font-bold mb-4 font-poppins text-center">
              {scholarship.title.split(":")[0]}
            </h1>
            <h1 className="text-xl font-normal font-poppins text-gray-400 mb-4 text-center">
              {scholarship.title.split(":")[1]}
            </h1>
          </div>
          <div className=" relative bg-heroBlue h-80 w-80  md:h-[30rem] md:w-[30rem] rounded-lg">
            <img
              src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1722364089/destiny-euro/germany-images/photo-1523050854058-8df90110c9f1_gh79gl.jpg"
              alt="Experienced Person"
              className=" rounded-lg object-cover object-top h-80 w-80  md:h-[30rem] md:w-[30rem] "
            />

            <div className="absolute h-14 w-48 bg-circleSky bg-opacity-75 flex justify-center items-center rounded-lg shadow-xl bottom-12 left-40 md:left-80 z-10">
              <p className="font-serif font-semibold text-xs max-w-40 text-center text-gray-800 tracking-wide">
                "Investing in education is investing in a brighter future."
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-2/5 grid grid-cols-1  gap-4  ">
          {scholarship.points.map((point, index) => (
            <div key={index} className="border-b-2 py-2 flex  border-gray-300">
              <div className=" w-20 h-20 flex  justify-center ">
                {" "}
                <img src={iconMapping[index+1]} alt="" className="h-10" />{" "}
              </div>
              <div className="w-3/4">
                <h2 className="text-xl font-bold mb-2 font-poppins">
                  {point.split(":")[0]}
                </h2>
                <p className="text-gray-500 font-semibold tracking-normal font-poppins ">
                  {point.split(":")[1]}
                </p>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipSection;
