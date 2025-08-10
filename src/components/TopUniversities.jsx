import React, { useState } from "react";
import { LiaUniversitySolid } from "react-icons/lia";

const TopUniversities = ({ universities }) => {
  const [uniLength, setUniLength] = useState(6);

  return (
    <div className=" flex flex-col items-center p-6">
      <div className="max-w-6xl w-full   rounded-lg overflow-hidden ">
        <div className="container mx-auto px-4 py-8 ">
          <h1 className="text-center p-4 text-4xl font-poppins font-bold text-gray-800 mb-4 ">
            {universities.title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {universities.points.map((point, index) => (
              <div 
                key={index} 
                className={`relative group transition-all duration-700 ease-in-out ${
                  index < uniLength 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                } ${index >= uniLength ? 'h-0 overflow-hidden' : 'h-auto'}`}
                style={{
                  transitionDelay: index < uniLength 
                    ? `${index * 100}ms` 
                    : `${(universities.points.length - index - 1) * 100}ms`
                }}
              >
                <img
                  src={point.split("#")[1]}
                  alt={point.split(": ")[0]}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg transition-all duration-500 group-hover:bg-opacity-75">
                  <h1 className="text-xl font-bold font-poppins transition-all duration-300">
                    {point.split(": ")[0]}
                  </h1>
                  <p className="font-poppins opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 ease-in-out transform translate-y-2 group-hover:translate-y-0">
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
                  className="border border-black rounded-full p-4  my-auto font-poppins font-semibold  hover:border-gray-600 hover:text-gray-600 hover:shadow-md transition-all duration-500"
                  onClick={() => setUniLength(6)}
                >
                  show less
                  <span>
                    <LiaUniversitySolid className="inline my-auto " size={20} />{" "}
                  </span>{" "}
                </button>
              ) : (
                <button
                  className="border border-black rounded-full p-4  my-auto font-poppins font-semibold hover:border-gray-600 hover:text-gray-600  hover:shadow-md  transition-all duration-500"
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
