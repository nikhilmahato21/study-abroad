import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center flex flex-col justify-center items-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 font-poppins tracking-wide">
            Contact Us
          </h2>
          <p className="mt-4 text-center text-graphite font-poppins max-w-2xl">
            Have questions or need more information? Reach out to us through our
            Contact Us page. We're here to help you every step of the way. Fill
            out the form, and our team will get back to you promptly.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium font-poppins text-graphite text-semibold tracking-wide"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full px-4 py-2 text-gray-700  font-poppins bg-white border-b-2 focus:border-b-[3px] focus:border-zinc-500 focus:outline-none  "
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium font-poppins text-graphite text-semibold tracking-wide"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block w-full px-4 py-2 text-gray-700  font-poppins bg-white border-b-2 focus:border-b-[3px] focus:border-zinc-500 focus:outline-none  "
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium font-poppins text-graphite text-semibold tracking-wide"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 text-gray-700  font-poppins bg-white border-b-2 focus:border-b-[3px] focus:border-zinc-500 focus:outline-none "
                placeholder="Your Email"
              />
            </div>
           
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium font-poppins text-graphite text-semibold tracking-wide"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="block w-full px-4 py-2 text-gray-700  font-poppins bg-white border-b-2 focus:border-b-[3px] focus:border-zinc-500 focus:outline-none  "
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="px-6 py-2 font-poppins text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
