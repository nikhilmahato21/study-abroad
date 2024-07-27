import React from "react";

const TeamsSection = () => {
  return (
    <div className="  p-6 md:px-12 bg-baseGrey">
      <div className="flex flex-col lg:flex-row items-center justify-center md:p-8  ">
        <div className="lg:w-1/2  p-4">
          <div className=" relative bg-heroBlue h-80 w-80 rounded-lg">
            <div className="h-80 w-80 absolute bottom-8 right-8   ">
              <img
                src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1722018309/destiny-euro/pexels-photo-1595385_qcklrv.jpg"
                alt="Experienced Person"
                className=" rounded-lg object-cover h-80 w-80  z-10"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:p-4">
          <h3 className="text-gray-400 text-sm mb-2 font-poppins mt-3">
            Our Team and Network
          </h3>
          <h2 className="text-3xl font-bold mb-4 font-poppins">
            Highly <span className="text-flyBlue"> experienced </span>people
            with us
          </h2>
          <p className="mb-4 font-poppins text-slate-900 font-semibold leading-relaxed">
            At Destiny Euro, our strength lies not only in our founders but also
            in our extensive team and vast network. We have a dedicated team of
            over 10 members who bring diverse expertise and a shared passion for
            helping students achieve their dreams. Each team member is committed
            to providing personalized support and guidance, ensuring that every
            student receives the best possible advice and assistance.
          </p>
          <p className="mb-8 font-poppins leading-relaxed">
            Our network of students and alumni spans across Europe, creating a
            supportive community where experiences and insights are shared. This
            network is a valuable resource for new students, offering real-world
            advice and fostering connections that last a lifetime. Whether you
            need help settling in, finding accommodation, or simply want to
            connect with fellow students, our network is here to support you
            every step of the way.
          </p>
          <div className="w-10 h-1 bg-flyBlue mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
