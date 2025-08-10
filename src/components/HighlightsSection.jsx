import React from "react";

const HighlightsSection = ({destination,setCountry}) => {
  return (
    
    <div
      className="text-center transition-all duration-300"
      onClick={() => setCountry(destination.name)}
    >
      <img
        src={destination.image}
        alt="Italy"
        className="w-12 h-12 md:w-16  md:h-16 mx-auto object-cover  rounded-full  hover:scale-110 transition-transform duration-300 hover:shadow-lg "
      />
      <p className="mt-2 capitalize font-poppins tracking-wide text-graphite">
        {destination.name}
      </p>
    </div>
  );
};

export default HighlightsSection;
