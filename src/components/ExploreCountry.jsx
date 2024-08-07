import React from "react";

const ExploreCountry = ({explore}) => {
  return (
    <section className="bg-baseGrey">
      <div className="flex flex-col  justify-center items-center text-center gap-4 py-10 px-2">
        <h1 className="text-4xl font-poppins font-bold text-slate-800 tracking-normal">{explore.title}</h1>
        <p className="max-w-7xl text-center font-poppins font-semibold  text-gray-600 ">{explore.points[0].split(":")[1]}</p>
      </div>

      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src={explore.images[0].link}
                alt=""
                className="absolute inset-0 h-full w-full  object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl font-poppins">
                {explore.images[0].title}
              </h3>
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
            >
              <img
                fill={true}
                src={explore.images[1].link}
                alt=""
                className="absolute inset-0 h-full w-full   object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl font-poppins">
                {explore.images[1].title}
              </h3>
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  fill={true}
                  src={explore.images[2].link}
                  alt=""
                  className="absolute inset-0 h-full w-full   object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl font-poppins">
                  {explore.images[2].title}
                </h3>
              </a>
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  fill={true}
                  src={explore.images[3].link}
                  alt=""
                  className="absolute inset-0 h-full w-full   object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl font-poppins">
                  {explore.images[3].title}
                </h3>
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-sky-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                fill={true}
                src={explore.images[4].link}
                alt=""
                className="absolute inset-0  h-full w-full object-center object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl font-poppins">
               {explore.images[4].title}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCountry;
