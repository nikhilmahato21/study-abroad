import React, { useRef, useState } from "react";
import S1 from "../assets/service-1.png";
import S2 from "../assets/service-2.png";
import S3 from "../assets/service-3.png";
import S4 from "../assets/service-4.png";
import Play from "../assets/play.png";
import Pause from "../assets/pause.png";



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
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <section className="bg-baseGrey p-4 md:px-16  ">
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:gap-10 ">
        <div className="w-full md:w-1/2 md:pr-8">
          <h1 className="text-2xl md:text-3xl lg:text-5xl p-4 font-bold text-gray-800 font-poppins">
            Your Career Deserves <br /> the Best Quality.
          </h1>
          <p className=" text-xl md:max-w-82 p-4 font-poppins text-graphite">
            Discover Our Comprehensive Services Designed to Ensure Your Success
            Abroad
          </p>
          <div className="relative w-full h-auto" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <video ref={videoRef} className="w-full h-auto rounded-2xl">
            <source src="https://res.cloudinary.com/dynbpb9u0/video/upload/v1721977724/destiny-euro/5439078-uhd_3840_2160_25fps_caun5m.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className={`absolute inset-0 flex items-center justify-center cursor-pointer   ${isPlaying && !isHovered ? 'hidden' : 'flex'}`}
            onClick={handlePlayPause}
          >
          <div className="bg-gray-200 w-14 h-14 opacity-45 rounded-full p-1 flex justify-center items-center">
          <img
              src={isPlaying ? Pause : Play}
              alt={isPlaying ? 'Pause' : 'Play'}
              className="w-10 h-10"
            /> </div>
            
          </div>
        </div>
        </div>
        <div className="w-full md:w-1/2  mt-6 py-12 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div className="p-4 bg-white  rounded-xl hover:border-graphite hover:border-2">
              <img src={service.icon} alt="" className="h-10" />
              <h3 className="text-xl font-bold mb-2 font-poppins"> {service.heading}</h3>
              <p className="text-gray-600 font-poppins">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
