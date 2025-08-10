import React from 'react'

const CountryIntroduction = ({destination}) => {
  return (
    <div className="md:p-6  grid grid-cols-1 ">
            <div
              className="relative  bg-cover bg-center rounded-xl overflow-hidden  h-96 object-center"
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative flex items-center justify-center h-full">
                <div className="text-center text-white px-6 md:px-12 lg:px-24">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
                    {destination.heading}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-6 font-poppins">
                    {destination.subheading}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3  py-8 px-1 md:p-8">
              <div className="md:w-1/2 ">
                <h2 className="text-3xl font-bold mb-4 font-poppins">
                  {destination.sections[0].title}
                </h2>
                <p className="text-gray-600 mb-4 font-poppins">
                  {destination.introduction}
                </p>
                <div className="mb-4">
                  {destination.sections[0].points.map((point) => (
                    <div className="flex items-center mb-2 ">
                      <div>
                        <h3 className="font-bold font-poppins text-lg">
                          {point.split(": ")[0]}
                        </h3>
                        <p className="text-gray-600 font-poppins">
                          {point.split(": ")[1]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2   bg-cyan-300 h-4/5 overflow-hidden rounded-lg">
                <img
                  src={destination.loc_image}
                  alt="Adventure"
                  className="w-full h-full  rounded-lg shadow-lg   object-cover object-center"
                />
              </div>
            </div>
          </div>
  )
}

export default CountryIntroduction