import React, { useState } from "react";
import { LiaUniversitySolid } from "react-icons/lia";

const TopUniversities = ({ universities }) => {
  const [uniLength, setUniLength] = useState(6);

  return (
    <div className=" flex flex-col items-center p-6">
      <div className="max-w-6xl w-full   rounded-lg overflow-hidden ">
        <div className="container mx-auto px-4 py-8 ">
          <h1 className="text-center p-4 text-4xl font-poppins font-bold text-graphite mb-4 ">
            {universities.title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {universities.points.slice(0, uniLength).map((point, index) => (
              <div key={index} className="relative group ">
                <img
                  src={
                   point.split("#")[1]
                  }
                  alt={point.split(": ")[0]}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
                  <h1 className="text-xl font-bold font-poppins">
                    {point.split(": ")[0]}
                  </h1>
                  <p className="font-poppins hidden group-hover:block transition-all duration-900">
                    {point.split(": ")[1].split("#")[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {universities.points.length > 3 && (
            <div className="flex items-center justify-center ">
              {uniLength > 6 ? (
                <button
                  className="border border-black rounded-full p-4  my-auto font-poppins font-semibold"
                  onClick={() => setUniLength(6)}
                >
                  show less
                  <span>
                    <LiaUniversitySolid className="inline my-auto " size={20} />{" "}
                  </span>{" "}
                </button>
              ) : (
                <button
                  className="border border-black rounded-full p-4  my-auto font-poppins font-semibold"
                  onClick={() => setUniLength(universities.points.length)}
                >
                  show more
                  <span>
                    <LiaUniversitySolid className="inline my-auto " size={20} />{" "}
                  </span>{" "}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopUniversities;
