import React, { useState } from "react";
import S1 from "../assets/service-1.png";
import S2 from "../assets/service-2.png";
import S3 from "../assets/service-3.png";
import S4 from "../assets/service-4.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: S1,
    heading: "Personalized Program Matching",
    description:
      "Tailored advice to help you choose the best program for your career goals.",
  },
  {
    icon: S2,
    heading: "Comprehensive Application Assistance",
    description:
      "Step-by-step guidance through the entire application process.",
  },
  {
    icon: S3,
    heading: "Visa and Immigration Support",
    description:
      "Expert assistance to secure your student visa and ensure a smooth immigration process.",
  },
  {
    icon: S4,
    heading: "Pre-Departure and Arrival Support",
    description: "Helping you settle in and feel at home in your new country.",
  },
];

const Services = () => {
  const [isopen, setIsOpen] = useState(true);
  return (
    <section className="bg-baseGrey p-4 md:p-16  ">
      <div className="container mx-auto px-4">
        <div className=" mb-16 md:flex ">
          <div className="md:w-1/2 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              OUR SERVICES
            </h2>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 font-poppins">
              Your Career Deserves <br /> the Best Quality.
            </h1>
          </div>
          <div className="md:w-1/2   flex  justify-center items-center py-2">
            <p className=" text-xl md:max-w-82 font-poppins text-graphite">
              Discover Our Comprehensive Services Designed to Ensure Your
              Success Abroad
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         { services.map((service,index)=> <ServiceCard key={index} index={index} service={service}/> )}
        </div>
      </div>
    </section>
  );
};

export default Services;
