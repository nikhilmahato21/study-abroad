import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-baseGrey py-12 px-3">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 font-poppins">
        Take the First Step Towards Your Future
        </h2>
        <p className="text-gray-600 font-semibold mt-4">
        Ready to embark on your study abroad journey? Contact us today to schedule a consultation and learn more about our services.
        </p>
        <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out font-poppins">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
