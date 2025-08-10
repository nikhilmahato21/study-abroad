

import React from "react";



const iconMapping = {
  1: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722676429/destiny-euro/group_mrfo85.png",
  2: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722676429/destiny-euro/united_mqh6id.png",
  3: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722676428/destiny-euro/cuisine_lan1d0.png",
  
  
};

const StudentCulture = ({ culture }) => {
  return (
    <div className=" p-4 md:p-16  bg-baseGrey">
      <h2 className="text-4xl font-bold text-center mb-8 font-poppins">
        {culture.title}
      </h2>
      <div className="lg:flex lg:space-x-8">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {culture.points.map((culture, index) => (
            <div key={index} className="flex mb-8 justify-center ">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mr-4">
                <img src={iconMapping[index+1]} alt="" />
              </div>
              <div className=" w-3/4">
                <h3 className="text-xl font-semibold font-poppins mb-2">
                  {culture.split(":")[0]}
                </h3>
                <p className="text-gray-600 font-poppins max-w-md mb-3">
                  {culture.split(":")[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Right Section */}
        <div className=" lg:w-1/2 grid grid-cols-2 gap-2 ">
          <div className="flex flex-col space-y-2 ">
            <div className="flex-1  bg-red-400 overflow-hidden rounded-md ">
              <img
                src={culture.image1}
                alt=""
                className="inset-0 w-full h-full object-cover object-center  "
              />
            </div>
            <div className="flex-1  bg-yellow-300 overflow-hidden rounded-md ">
              <img
                src={culture.image2}
                alt=""
                className="inset-0 w-full h-full object-cover object-center "
              />
            </div>
          </div>
          <div className="bg-purple-400 flex-1 overflow-hidden rounded-md">
            <img
              src={culture.image3}
              alt=""
              className="inset-0 w-full h-full object-cover object-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCulture;
