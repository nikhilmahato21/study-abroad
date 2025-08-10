import { PiFlyingSaucer } from "react-icons/pi";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <div className="text-center">
        <p className="text-9xl font-semibold text-flyBlue">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl font-poppins">
          page not found!
        </h1>
        <p className="mt-6 text-lg leading-7 font-poppins">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn   bg-flyBlue text-white tracking-widest font-poppins">
            fly back home <PiFlyingSaucer className="text-2xl" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
