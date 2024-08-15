import React from "react";
import { IoCallOutline } from "react-icons/io5";
const CallButton = () => {
  return (
    <div className="fixed  bottom-4 right-4">
      <button
        className="bg-circleSky text-white p-3 rounded-full shadow-lg hover:bg-blue-300 transition duration-300 ease-in-out"
        onClick={() => (window.location.href = "tel:7490052899")}
      >
        <span className="flex text-sm justify-center items-center gap-1 font-poppins font-semibold text-gray-600">
          <IoCallOutline className="h-8" />
          Call Us{" "}
        </span>
      </button>
    </div>
  );
};

export default CallButton;
