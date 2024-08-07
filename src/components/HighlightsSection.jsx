import React from "react";

const HighlightsSection = ({destination,setCountry}) => {
  return (
    
    <div
      className="text-center hover:scale-125    transition-all duration-500   "
      onClick={() => setCountry(destination.name)}
    >
      <img
        src={destination.image}
        alt="Italy"
        className="w-12 h-12 md:w-16  md:h-16 mx-auto object-cover  rounded-full hover:border-4 hover:border-zinc-200 hover:shadow-lg "
      />
      <p className="mt-2 capitalize font-poppins tracking-wide text-graphite">
        {destination.name}
      </p>
    </div>
  );
};

export default HighlightsSection;
