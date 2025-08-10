import React from "react";

const FoundersSection = () => {
  return (
    <div className="container mx-auto p-6 md:px-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-poppins  tracking-wide">
        Meet Our <span className="text-flyBlue">Founders</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center mb-12  gap-3 ">
        <div className="w-full md:w-1/3 p-4 rounded-xl h-[19.2rem] flex justify-center ">
          <div className="w-full h-full relative">
            <img
              src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1723130813/destiny-euro/IMG_4361_r5lajj_1_tkhu2z.jpg"
              alt="Mrinal Dawn"
              className="rounded-lg  object-cover object-center w-full h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3  p-4 py-6 bg-circleSky bg-opacity-90 rounded-xl">
          <h2 className="text-2xl font-bold mb-2 font-poppins tracking-wide text-graphite">
            Mrinal Dawn
          </h2>
          <h3 className="text-xl font-semibold mb-4 font-poppins text-gray-400">
            A Visionary Leader
          </h3>
          <p className="font-poppins  leading-6 text-wrap ">
            Mrinal Dawn, an international student from India, founded Destiny
            Euro with a passion for helping others achieve their academic
            dreams. His firsthand experience of studying in Europe has equipped
            him with invaluable insights into the challenges and opportunities
            that international students face. Over the past four years, Mrinal
            has successfully guided numerous students through the intricacies of
            studying abroad. His dedication and commitment have not only helped
            students from India but from various parts of the world. Mrinal's
            extensive network and deep understanding of European education
            systems make him an exceptional leader in this field.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-3">
        <div className="w-full md:w-1/3 p-4 rounded-xl  lg:h-[19.2rem] flex justify-center ">
          <div className="w-full h-full ">
            <img
              src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1723130814/destiny-euro/IMG_4363_fbe5nd_1_yurnli.jpg"
              alt=" Deepshika Thakur"
              className="rounded-lg  object-cover object-top w-full h-full"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 p-4 py-6  bg-circlePink  bg-opacity-80 rounded-xl  ">
          <h2 className="text-2xl font-bold mb-2 font-poppins tracking-wide text-graphite">
            Deepshika Thakur
          </h2>
          <h3 className="text-xl font-semibold mb-5 font-poppins text-gray-400">
            An Inspirational Mentor
          </h3>
          <p className="font-poppins  leading-6">
            Co-founder Deepshika Thakur is an international student from India
            with over five years of extensive experience and an exceptional
            network throughout Italy and Europe. Deepshika's journey has been
            marked by overcoming numerous challenges, giving her a deep empathy
            for the struggles that international students often face.
            Deepshika's hands-on approach and her ability to offer tailored
            advice ensure that each student feels supported and empowered. Her
            commitment to creating a seamless and enriching experience for every
            student makes her an invaluable co-founder of Destiny Euro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
