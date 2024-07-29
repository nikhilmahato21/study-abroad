import React from "react";

const ScholarshipSection = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center p-2  ">
      <div className=" lg:flex justify-center   p-10 max-w-6xl w-full gap-8">
        <div className="mb-8 lg:mb-0  lg:w-3/5  border-r-2 border-gray-300 p-2 ">
          <h1 className="text-4xl font-bold mb-4">
            Our vision is to connect with the world trough innovation.
          </h1>
          <button className="px-4 py-2 bg-black text-white rounded">
            Our Services
          </button>
        </div>
        <div className=" lg:w-2/5 grid grid-cols-1  p-2 gap-8  ">
          <div className="border-b-2    py-4 border-gray-300">
            <h2 className="text-xl font-bold mb-2">Vision</h2>
            <p className="text-gray-600">
              Dolor magna eget est lorem ipsum dolor sit amet consectetur.
              Bibendum ut ultricies integer quis auctor elit sed. Odio morbi
              quis commodo odio aenean sed.
            </p>
          </div>
          <div className="border-b-2   py-4 border-gray-300">
            <h2 className="text-xl font-bold mb-2 ">Innovation</h2>
            <p className="text-gray-600">
              Quis risus sed vulputate odio ut. Semper quis lectus nulla at
              volutpat diam. Sagittis orci a scelerisque purus semper eget duis
              at.
            </p>
          </div>
          <div className=" py-4 ">
            <h2 className="text-xl font-bold mb-2">Connection</h2>
            <p className="text-gray-600">
              Ac tortor vitae purus semper quis lectus. Commodo elit at
              imperdiet dui accumsan sit. Integer vitae justo eget magna
              fermentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipSection;
