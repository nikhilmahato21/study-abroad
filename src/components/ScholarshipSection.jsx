import React from "react";

const ScholarshipSection = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center p-2  pt-10 ">
      <div className=" lg:flex justify-center   p-10 max-w-6xl w-full gap-8">
        <div className="mb-8 lg:mb-0  lg:w-3/5  md:border-r-2 border-gray-300 p-4 flex flex-col justify-center items-center  gap-10">
          <div>
            <h1 className="text-3xl font-bold mb-4 font-poppins">
              Scholarships and Financial Aid in Italy
            </h1>
            <h1 className="text-xl font-normal font-poppins text-gray-400 mb-8">
              {" "}
              A Comprehensive Guide to Funding Your Education
            </h1>
          </div>
          <div className=" relative bg-heroBlue h-80 w-80  md:h-96 md:w-96 rounded-lg">
            <div className="h-80 w-80  md:h-96 md:w-96 absolute bottom-6 right-6   ">
              <img
                src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1722364089/destiny-euro/germany-images/photo-1523050854058-8df90110c9f1_gh79gl.jpg"
                alt="Experienced Person"
                className=" rounded-lg object-cover object-top h-80 w-80  md:h-96 md:w-96  z-10"
              />
            </div>
            <div className="h-80 w-80 bg-black z-30 bg-opacity-45 flex items-center  md:h-96 md:w-96 absolute bottom-6 right-6   ">
              <p className="font-semibold  font-serif text-center text-white">
                {" "}
                " Investing in education is investing in a brighter future. "
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-2/5 grid grid-cols-1  p-2 gap-8  ">
          <div className="border-b-2    py-4 border-gray-300">
            <h2 className="text-xl font-bold mb-2 font-poppins">Vision</h2>
            <p className="text-gray-500 font-semibold tracking-normal font-poppins ">
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
