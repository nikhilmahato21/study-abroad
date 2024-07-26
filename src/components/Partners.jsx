import React from "react";

const Partners = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 bg-white rounded-2xl shadow-lg">
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <div className="relative w-full h-80">
          <img
            src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1721843456/pexels-pixabay-159740_cgcs8n.jpg"
            alt="Team working"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
          <button className="absolute bottom-4 left-4 bg-green-500 text-white p-2 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-4xl font-bold mb-4 font-poppins ">
          Partnering with <span className="text-flyBlue">Universities</span>{" "}
          Across the Globe
        </h2>
        <p className="text-gray-600 mb-6 font-poppins">
          Join us on our journey as we build a global network of students and
          institutions. We are dedicated to providing unparalleled
          opportunities.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-3xl  font-extrabold font-poppins tracking-wide">
              100+{" "}
            </p>
            <p className="text-gray-600 font-poppins">
              Partner Universities in the Pipeline
            </p>
          </div>
          <div>
            <p className="text-3xl font-extrabold font-poppins tracking-wide">
              50+
            </p>
            <p className="text-gray-600 font-poppins">
              Programs Available for Enrollment
            </p>
          </div>
          <div>
            <p className="text-3xl font-extrabold font-poppins tracking-wide">
              20+
            </p>
            <p className="text-gray-600 font-poppins">
              Students Ready to Embark on Their Journey
            </p>
          </div>
          <div>
            <p className="text-3xl font-extrabold font-poppins tracking-wide">
              10+
            </p>
            <p className="text-gray-600 font-poppins">
              Experienced Team Members to Support You
            </p>
          </div>
        </div>
        <button className="bg-flyBlue text-white py-2 px-4 rounded-full flex items-center font-poppins">
          Apply Now
          <svg
            className="w-6 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Partners;
