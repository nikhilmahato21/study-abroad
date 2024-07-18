import React from "react";
import ServiceSection from "../components/ServiceSection";

const servicesList = [
  {
    id:1,
    service: "Career Counseling",
    heading: "Personalized Career Counseling",
    subheading: "Guiding Your Future, One Step at a Time",
    introduction:
      "At Destiny Euro, we understand that choosing the right career path can be daunting. Our personalized career counseling services are designed to help you navigate your educational and professional journey with confidence.",
    imageUrl: "https://via.placeholder.com/300x200",
    sections: [
      {
        title: "Why Career Counseling?",
        points: [
          "Discover Your Strengths: Our expert counselors will help you identify your strengths and interests to align with your career goals.",
          "Tailored Advice: Receive personalized advice based on your academic background, skills, and aspirations.",
          "Strategic Planning: Develop a clear, actionable plan to achieve your career objectives.",
        ],
      },
      {
        title: "Our Approach",
        points: [
          "Initial Consultation: Understand your background, interests, and goals.",
          "Skills Assessment: Use psychometric tests and personalized assessments to identify your key strengths.",
          "Career Mapping: Map out potential career paths and educational opportunities.",
          "Continuous Support: Ongoing support and guidance throughout your academic journey.",
        ],
      },
      {
        title: "Success Stories",
        points: [
          "Aarav Patel: Engineering student who found his passion in renewable energy.",
          "Priya Singh: Transitioned from a general science background to a specialized program in biomedical engineering.",
        ],
      },
      {
        title: "How to Get Started",
        points: [
          "Schedule a Consultation: Contact us to book your first career counseling session.",
          "Personalized Plan: Receive a customized career plan tailored to your unique needs.",
        ],
      },
    ],
    callToAction: "Start your journey with our expert career counselors today!",
  },
];

const Services = () => {
  return <ServiceSection service={servicesList[0]} />;
};

export default Services;
