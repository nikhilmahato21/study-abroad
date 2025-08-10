import React, { useState } from "react";

import TopUniversities from "../components/TopUniversities";
import EducationSystem from "../components/EducationSystem";
import ScholarshipSection from "../components/ScholarshipSection";
import CountryIntroduction from "../components/CountryIntroduction";
import HighlightsSection from "../components/HighlightsSection";
import StudentCulture from "../components/StudentCulture";
import Courses from "../components/Courses";
import { destinations } from "../Lists";
import ExploreCountry from "../components/ExploreCountry";

const destinationsList = destinations;

const Destinations = () => {
  const [country, setCountry] = useState("italy");

  const destinationSelect = destinationsList.filter(
    (destination) => destination.name === country
  );
  const destination = destinationSelect[0];

  return (
    <>
      <div className="min-h-screen bg-baseGrey flex flex-col items-center p-6">
        <div className="max-w-6xl w-full   rounded-lg overflow-hidden">
          <div className="flex justify-around py-4 mb-10 md:px-40  ">
            {/* highlight section */}
            {destinationsList.map((destination) => (
              <HighlightsSection
                setCountry={setCountry}
                destination={destination}
              />
            ))}
          </div>

          <CountryIntroduction destination={destination} />
        </div>
      </div>
      {/* top universities */}
      <TopUniversities universities={destination.sections[2]} />
      {/* education system */}
      <EducationSystem system={destination.sections[1]} />
      <ScholarshipSection scholarship={destination.sections[3]} />
      <StudentCulture culture={destination.sections[4]} />

      <Courses course={destination.sections[5]} />
      
      <ExploreCountry explore={destination.sections[6]} />
      
    </>
  );
};

export default Destinations;
