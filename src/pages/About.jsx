import React from "react";

const About = () => {
  return (
    <>
      <section className="py-16 bg-baseGrey">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-zinc-800 font-poppins tracking-wide">
              About Us
            </h2>
            <p className="mt-4 text-graphite text-md font-poppins">
              Learn more about our mission, vision, and values.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
              <p className="text-gray-600 mb-6 text-lg tracking-wide font-poppins">
                At Destiny Euro, we believe that studying abroad is more than an
                educational opportunity; it's a transformative journey that
                shapes futures and creates global citizens. Founded by{" "}
                <span className="font-bold tracking-wide text-flyBlue ">
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
                </span>{" "}
              </p>
              <h3 className="text-2xl font-semibold text-graphite font-poppins tracking-wide  mb-4">
                Our Mission
              </h3>
              <p className="text-gray-500 leading-5 font-poppins">
                Our mission is to make your study abroad journey smooth and
                successful. We provide personalized consultancy services to help
                you navigate the complexities of studying in a foreign country.
                From application processes to finding the right accommodation,
                we ensure you have the support and guidance needed to thrive.
              </p>
            </div>
            <div className="lg:w-1/2 flex  justify-center ">
              <img
                src="https://via.placeholder.com/500x300"
                alt="About us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-12 font-poppins  tracking-wide">
          Meet Our <span className="text-flyBlue">Founders</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center mb-12  gap-3 ">
          <div className="w-full md:w-1/3 p-4 rounded-xl h-80 flex justify-center ">
            <div className="w-full h-full relative">
              <img
                src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1721840020/IMG_4361_r5lajj.jpg"
                alt="Mrinal Dawn"
                className="rounded-lg  object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3  p-4 bg-circleSky rounded-xl">
            <h2 className="text-2xl font-bold mb-2 font-poppins tracking-wide text-graphite">
              Mrinal Dawn
            </h2>
            <h3 className="text-xl font-semibold mb-4 font-poppins text-gray-400">
              A Visionary Leader
            </h3>
            <p className="font-poppins  leading-6 text-wrap">
              Mrinal Dawn, an international student from India, founded Destiny
              Euro with a passion for helping others achieve their academic
              dreams. His firsthand experience of studying in Europe has
              equipped him with invaluable insights into the challenges and
              opportunities that international students face. Over the past four
              years, Mrinal has successfully guided numerous students through
              the intricacies of studying abroad. His dedication and commitment
              have not only helped students from India but from various parts of
              the world. Mrinal's extensive network and deep understanding of
              European education systems make him an exceptional leader in this
              field.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-3">
          <div className="w-full md:w-1/3 p-4 rounded-xl h-80 flex justify-center ">
            <div className="w-full h-full relative">
              <img
                src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1721840020/IMG_4363_fbe5nd.jpg"
                alt="Mrinal Dawn"
                className="rounded-lg  object-cover object-top w-full h-full"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 p-4 bg-circlePink rounded-xl  ">
            <h2 className="text-2xl font-bold mb-2 font-poppins tracking-wide text-graphite">
              Deepshika Thakur
            </h2>
            <h3 className="text-xl font-semibold mb-4 font-poppins text-gray-400">
              An Inspirational Mentor
            </h3>
            <p className="font-poppins  leading-6">
              Co-founder Deepshika Thakur is an international student from India
              with over five years of extensive experience and an exceptional
              network throughout Italy and Europe. Deepshika's journey has been
              marked by overcoming numerous challenges, giving her a deep
              empathy for the struggles that international students often face.
              Deepshika's hands-on approach and her ability to offer tailored
              advice ensure that each student feels supported and empowered. Her
              commitment to creating a seamless and enriching experience for
              every student makes her an invaluable co-founder of Destiny Euro.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
