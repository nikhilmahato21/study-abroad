import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-zinc-800 font-poppins">
            About Us
          </h2>
          <p className="mt-4 text-graphite text-md font-poppins">
            Learn more about our mission, vision, and values.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            
            <p className="text-gray-600 mb-6 text-lg">
              Welcome to Destiny Euro! Founded by <span className="font-semibold">Mrinal Dawn,</span>  an international
              student from India with firsthand experience studying in Europe,
              we are dedicated to making your study abroad journey smooth and
              successful. Over the past four years, Mrinal has helped numerous
              students navigate the complexities of studying abroad, ensuring
              they have the support and guidance needed to thrive in a new
              country.
            </p>
            <h3 className="text-2xl font-semibold text-graphite font-poppins tracking-wide  mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              At Destiny Euro, we understand the unique challenges that
              international students face. Our mission is to provide
              comprehensive support, from choosing the right university to
              securing your visa and finding accommodation. Our deep
              understanding of European education systems, particularly in Italy
              and Germany, positions us uniquely to offer personalized and
              effective assistance.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/500x300"
              alt="About us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
