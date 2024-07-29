import React from "react";

const Card = ({ icon, title, description }) => (
  <div className="bg-white p-6  rounded-lg shadow-sm flex flex-col items-center text-center">
    <div className="text-4xl pb-2 lg:pb-6">
      <img src={icon} alt="" className="w-10 " />
    </div>
    <h3 className="text-xl  text-slate-800 font-semibold mb-2 font-poppins tracking-normal">
      {title}
    </h3>
    <p className="text-gray-500 mb-4 font-poppins">{description}</p>
  </div>
);
const EducationSystem = ({ system }) => {
  return (
    <div className=" bg-baseGrey h-[68rem] sm:h-[60rem] md:h-auto  min-h-screen flex justify-center  ">
      <div className="w-full  ">
        <div className="relative ">
          <img
            src={system.title.split("#")[1]}
            alt="Example"
            className="w-full  h-80 object-cover"
          />
          <div className="absolute inset-0 flex bg-black bg-opacity-50   items-center justify-center">
            <h1 className="text-4xl text-white font-bold font-poppins text-center  ">
              {system.title.split("#")[0]}
            </h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 mx-4 transform translate-y-[90%]  md:translate-y-3/4  p-4 ">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {system.points.map((point) => (
                  <Card
                    icon={point.split("#")[1]}
                    title={point.split(":")[0]}
                    description={point.split(":")[1].split("#")[0]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EducationSystem;
