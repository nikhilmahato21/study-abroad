import Line from "../assets/Line2.svg";

const Landing = () => {
  return (
    <div className="flex justify-between items-center h-screen">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-pink-200 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1522075469828-03e7c725c44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              className="w-32 h-32 rounded-full"
              alt="Teacher"
            />
            <h2 className="text-2xl font-bold">Teacher</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dictum faucibus adipiscing
            urna scelerisque lectus eget fermentum. Scelerisque facilisis
            elementum mattis elit
          </p>
          <div className="bg-gray-200 rounded-lg p-2">
            <p className="text-sm font-medium">
              Sit amet scelerisque lectus eget
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-200 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17c508a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              className="w-32 h-32 rounded-full"
              alt="Student"
            />
            <h2 className="text-2xl font-bold">Student</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dictum faucibus adipiscing
            urna scelerisque lectus eget fermentum. Scelerisque facilisis
            elementum
          </p>
          <div className="bg-gray-200 rounded-lg p-2">
            <p className="text-sm font-medium">
              Sit amet scelerisque lectus eget
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
