import React from "react";

const ServiceSection = ({ service }) => {
  return (
    <div
      className={`min-h-screen  flex flex-col items-center p-6 ${
        service.id % 2 === 1 ? "bg-baseGrey" : "bg-white"
      }`}
    >
      <div className="max-w-6xl w-full    rounded-lg overflow-hidden">
        <div className="flex  flex-col  items-center justify-center py-4 mb-10 md:px-40  ">
          <h1 className="font-poppins text-2xl ">{service.service}</h1>
          <p className="font-poppins text-gray-700">{service.callToAction}</p>
        </div>

        <div className="p-6  grid grid-cols-1 md:grid-cols-2">
          <div>
            {" "}
            <h1 className="text-4xl font-light font-poppins tracking-wide mb-4">
              {service.heading}
            </h1>
            <p className="mb-6 font-poppins text-graphite">
              {service?.subheading}
            </p>
            <img
              src={service.imageUrl}
              alt={service.service}
              className=" w-96 h-64 object-cover mb-6 "
            />
            <p className="mb-6 max-w-96 font-poppins">{service.introduction}</p>
          </div>

          <div className=" flex flex-col items-center justify-center">
            {service.sections.map((section) => (
              <div className="collapse collapse-plus bg-base-400 border-t-[3px] border-gray-300 rounded-none ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium  font-poppins tracking-wide">
                  {section.title}
                </div>
                <div className="collapse-content">
                  <ul>
                    {section.points.map((point) => (
                      <li className="font-poppins">
                        {" "}
                        <span className="font-bold">
                          {point.split(": ")[0]} :{" "}
                        </span>
                        {point.split(": ")[1]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;