import React from "react";

const servicesList = [
  {
    service: "Career Counseling",
    heading: "Personalized Career Counseling",
    subheading: "Guiding Your Future, One Step at a Time",
    introduction:
      "At Destiny Euro, we understand that choosing the right career path can be daunting. Our personalized career counseling services are designed to help you navigate your educational and professional journey with confidence.",
    imageUrl: "https://via.placeholder.com/300x200",
    sections: [
      {
        title: "Why Career Counseling?",
        points: [
          "Discover Your Strengths: Our expert counselors will help you identify your strengths and interests to align with your career goals.",
          "Tailored Advice: Receive personalized advice based on your academic background, skills, and aspirations.",
          "Strategic Planning: Develop a clear, actionable plan to achieve your career objectives.",
        ],
      },
      {
        title: "Our Approach",
        points: [
          "Initial Consultation: Understand your background, interests, and goals.",
          "Skills Assessment: Use psychometric tests and personalized assessments to identify your key strengths.",
          "Career Mapping: Map out potential career paths and educational opportunities.",
          "Continuous Support: Ongoing support and guidance throughout your academic journey.",
        ],
      },
      {
        title: "Success Stories",
        points: [
          "Aarav Patel: Engineering student who found his passion in renewable energy.",
          "Priya Singh: Transitioned from a general science background to a specialized program in biomedical engineering.",
        ],
      },
      {
        title: "How to Get Started",
        points: [
          "Schedule a Consultation: Contact us to book your first career counseling session.",
          "Personalized Plan: Receive a customized career plan tailored to your unique needs.",
        ],
      },
    ],
    callToAction: "Start your journey with our expert career counselors today!",
  },
];

const Services = () => {
  return <div className="min-h-screen bg-baseGrey flex flex-col items-center p-6">
  <div className="max-w-6xl w-full    rounded-lg overflow-hidden">
    <div className="flex  flex-col  items-center justify-center py-4 mb-10 md:px-40  ">
     <h1 className="font-poppins text-2xl ">{servicesList[0].service}</h1>
     <p className="font-poppins text-gray-700">{servicesList[0].callToAction}</p>
    </div>

    <div className="p-6  grid grid-cols-1 md:grid-cols-2">
      <div>
        {" "}
        <h1 className="text-4xl font-light font-poppins tracking-wide mb-4">
          {servicesList[0].heading}
        </h1>
        <p className="mb-6 font-poppins text-graphite">
          {servicesList[0]?.subheading}
        </p>
        <img
          src={servicesList[0].imageUrl}
          alt="Italy Campus"
          className=" w-96 h-64 object-cover mb-6 "
        />
        <p className="mb-6 max-w-96 font-poppins">
          {servicesList[0].introduction}
        </p>
      </div>

      <div className=" flex flex-col items-center justify-center">
        {servicesList[0].sections.map((section) => (
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
</div>;
};

export default Services;
