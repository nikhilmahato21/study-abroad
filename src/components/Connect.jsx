import React from "react";
import Teacher from "../assets/teacher.png";
import Student from "../assets/student.png";
import Line from "../assets/Line2.svg"

function Connect() {
  return (
    <div className="bg-white  p-16 lg:px-40 relative" >

    <div className="h-20 w-20 rounded-full bg-baseGrey absolute z-30 top-1/2 left-1/2 hidden md:flex shadow-xl"></div>
    
      <section className="flex flex-wrap justify-center  ">
        {/* Image on the left, text on the right */}
        <div className="w-1/2 mb-8 relative overflow-hidden">
          <div className="bg-slate-400 md:h-64 md:w-60 relative rounded-xl overflow-hidden ">
            <img src={Teacher} alt="teacher" className="md:h-64 md:w-60 object-cover" />
            <div className="absolute top-0  left-52 text-2xl font-bold text-white z-10 ">
              Teacher
            </div>
          </div>
          <div className="absolute top-0  left-52 text-2xl font-bold  ">
              Teacher
            </div>
        </div>
        <div className="w-1/2 md:pl-4 flex items-center justify-center">
          <p className=" text-xs  text-right md:text-left md:text-lg font-poppins text-graphite ">
            With over four years of experience helping international students, I
            understand the unique challenges you face and is dedicated to
            providing personalized guidance.
          </p>
        </div>
          
        {/* Image on the right, text on the left */}
        <div className="w-1/2 md:pr-4 flex items-center justify-center">
          <p className=" text-xs  text-left md:text-left md:text-lg font-poppins text-graphite ">
            My journey to studying in Italy was seamless thanks to Mrinal and
            his team's support. From application to arrival, I felt supported
            every step of the way.
          </p>
        </div>
        <div className="w-1/2 relative overflow-hidden  ">
          <div className="md:h-64 md:w-56 relative rounded-xl  overflow-hidden ml-auto ">
          <img src={Student} alt="student" className=" md:h-64 md:w-56  object-cover " />
          <div className="absolute top-0  right-48 text-2xl font-bold z-10 text-white ">
              Student
            </div>
          </div>
          <div className="absolute top-0 right-48 text-2xl font-bold  ">
              Student
            </div>
        </div>
      </section>
    </div>
  );
}

export default Connect;
