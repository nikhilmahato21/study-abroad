import { DiVim } from "react-icons/di";
import Line from "../assets/Line2.svg";
import Hero from "../components/Hero";
import Connect from "../components/Connect";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import Partners from "../components/Partners";
import CallToAction from "../components/CallToAction";

const Landing = () => {
  return (
    <div className="scrollbar-hide">
      <Hero />
      <Connect />
      <Services />
      <Process />
      <Testimonial />
      <Partners/>
      <CallToAction/>
    </div>
  );
};

export default Landing;
