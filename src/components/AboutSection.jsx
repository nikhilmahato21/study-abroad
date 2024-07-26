import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-baseGrey md:px-12">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-zinc-800 font-poppins tracking-wide">
            About Us
          </h2>
          <p className="mt-4 text-gray-600 text-md font-poppins">
            Learn more about our mission, vision, and values.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <p className="text-gray-600 mb-6 text-lg tracking-wide font-poppins leading-relaxed">
              <span className="">At Destiny Euro,</span> we believe that
              studying abroad is more than an educational opportunity; it's a
              transformative journey that shapes futures and creates global
              citizens. Founded by{" "}
              <span className="font-bold tracking-wide text-flyBlue">
                Mrinal Dawn
              </span>{" "}
              and
              <span className="font-bold tracking-wide text-flyBlue">
                {" "}
                Deepshika Thakur
              </span>
              , both of whom have rich personal and professional experiences
              studying and living across Europe, we are dedicated to guiding
              students on their path to success in five diverse and dynamic
              countries:{" "}
              <span className="font-semibold text-Graphite">
                Italy, Germany, France, the UK, and Poland
              </span>
            </p>
            <h3 className="text-2xl font-semibold text-graphite font-poppins tracking-wide mb-4">
              Our Mission
            </h3>
            <p className="text-gray-500 leading-7 font-poppins">
              Our mission is to make your study abroad journey smooth and
              successful. We provide personalized consultancy services to help
              you navigate the complexities of studying in a foreign country.
              From application processes to finding the right accommodation, we
              ensure you have the support and guidance needed to thrive.
            </p>
          </div>
          <div className="lg:w-1/2 lg:h-4/5 flex justify-center">
            <img
              src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1721844553/pexels-bertellifotografia-2608517_lz9xw9.jpg"
              alt="About us"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
