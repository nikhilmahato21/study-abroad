import { Link } from "react-router-dom";
import hero from "../assets/hero-banner.png";
import Italy from "../assets/italy.png";
import Germany from "../assets/germany.png";
import UK from "../assets/uk.png";
import France from "../assets/france.png";
import Poland from "../assets/poland.png";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2  gap-20 items-center bg-baseGrey  lg:h-screen  overflow-x-hidden overflow-y-hidden">
      <div className="align-element pt-7 ">
        <div>
          <h1 className="max-w-xl text-4xl font-semibold tracking-wide font-poppins text-stone-700 sm:text-[3rem] leading-[3.4rem] ">
            Transform Your Future with a World-Class Education{" "}
            <span className=" text-flyBlue">Abroad</span>
          </h1>
          <p className="mt-4  max-w-md text-sm font-poppins leading-6">
            Your Career Deserves Excellence. Our Experts Are Here to Support You
            Every Step of the Way. So, Why Wait?
          </p>
        </div>
        <div className="mt-8 flex gap-2">
          <Link to="/" className="btn bg-flyBlue text-white">
            Explore Programs
          </Link>
          <Link to="/" className="btn border-2 border-flyBlue">
            Explore Programs
          </Link>
        </div>
      </div>
      <div className=" flex  items-center justify-center  relative  scale-75 md:scale-100 pb-12 lg:pb-0 ">
        <img
          src={"https://res.cloudinary.com/dynbpb9u0/image/upload/v1723719102/destiny-euro/pic_2_htlpyr.png"}
          alt="Centered Image"
          className="center-img absolute z-10 h-64 w-64 rounded-full  "
        />
        <div className="container   w-96 h-96 border border-stone-600 rounded-full flex justify-center items-center   animate-revolve  ">
          <div className="box relative  w-full h-full -left-[50%] flex justify-center items-center cursor-pointer">
            <div className="circle h-14 w-14  bg-heroBlue rounded-full absolute  transform rotate-[36deg] origin-[217px] flex items-center justify-center">
              <img
                src={France}
                className="transform rotate-[-36deg] h-8 w-8 "
              />
            </div>
            <div className="sm h-6 w-6  bg-flyBlue rounded-full absolute  transform rotate-[72deg] origin-[203px]"></div>
            <div className=" h-14 w-14  bg-heroBlue rounded-full absolute  transform rotate-[108deg] origin-[217px] flex items-center justify-center">
              <img
                src={Italy}
                className="transform rotate-[-108deg] h-8 w-8 "
              />
            </div>
            <div className="sm-circle h-6 w-6  bg-flyBlue rounded-full absolute  transform rotate-[144deg] origin-[203px]"></div>
            <div className="circle h-14 w-14  bg-heroBlue rounded-full absolute  transform rotate-[180deg] origin-[217px] flex items-center justify-center">
              <img
                src={Germany}
                className="transform rotate-[-180deg] h-8 w-8 "
              />
            </div>
            <div className="sm-circle h-6 w-6  bg-flyBlue rounded-full absolute  transform rotate-[216deg] origin-[203px]"></div>
            <div className="circle h-14 w-14  bg-heroBlue rounded-full absolute  transform rotate-[252deg] origin-[217px] flex items-center justify-center">
              <img
                src={UK}
                className="transform rotate-[-252deg] h-8 w-8 "
              />
            </div>
            <div className="sm-circle h-6 w-6  bg-flyBlue rounded-full absolute  transform rotate-[288deg] origin-[203px]"></div>
            <div className="circle h-14 w-14  bg-heroBlue rounded-full absolute  transform rotate-[324deg] origin-[217px] flex items-center justify-center">
              <img
                src={Poland}
                className="transform rotate-[-324deg] h-8 w-8 "
              />
            </div>
            <div className="sm-circle h-6 w-6  bg-flyBlue rounded-full absolute  transform rotate-[360deg] origin-[203px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
