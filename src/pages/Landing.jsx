import { DiVim } from "react-icons/di";
import { motion } from "framer-motion";
import Line from "../assets/Line2.svg";
import Hero from "../components/Hero";
import Connect from "../components/Connect";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import Partners from "../components/Partners";
import CallToAction from "../components/CallToAction";

const Landing = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="scrollbar-hide"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Connect />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Services />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Process />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Testimonial />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Partners/>
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CallToAction/>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
