import { DiVim } from "react-icons/di";
import Line from "../assets/Line2.svg";
import Hero from "../components/Hero";
import Connect from "../components/Connect";
import Services from "../components/Services";

const Landing = () => {
  return (
    <div className="scrollbar-hide">
      <Hero />
      <Connect />
      <Services />
    </div>
  );
};

export default Landing;
