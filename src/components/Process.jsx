import React from "react";
import J1 from "../assets/journey-1.png";
import J2 from "../assets/journey-2.png";
import J3 from "../assets/journey-3.png";

const process = [
  {
    title: "Choose Your Program",
    description:
      "Select from a wide range of top universities and programs that fit your career aspirations.",
    icon: J1,
    bg: "bg-circleSky",
  },
  {
    title: "Apply with Ease",
    description:
      "Our experts guide you through the application process, ensuring all requirements are met.",
    icon: J2,
    bg: "bg-circlePurple",
  },
  {
    title: "Prepare for Departure",
    description:
      "Receive comprehensive pre-departure briefings and post-arrival support to help you settle in quickly.",
    icon: J3,
    bg: "bg-circlePink",
  },
];

const Process = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:p-16 ">
      <h1 className="text-3xl font-bold font-poppins mb-4 ">
        Your <span className=" text-flyBlue">Journey</span> Starts Here
      </h1>
      <p className="text-graphite text-lg font-poppins max-w-80 mb-4">
        Follow These Simple Steps to Achieve Your Dreams Abroad
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {process.map((process) => {
          return (
            <div className="p-6  hover:rounded-lg hover:shadow-lg ">
              <div
                className={`h-20 w-20 mb-10 rounded-full flex justify-center items-center  shadow-lg ${process.bg}`}
              >
                <img src={process.icon} alt="" className="w-10" />
              </div>

              <h3 className="text-xl font-bold mb-2 font-poppins">
                {process.title}
              </h3>
              <p className="text-graphite font-poppins">
                {process.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
