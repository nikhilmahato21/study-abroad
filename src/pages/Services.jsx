import React from "react";
import ServiceSection from "../components/ServiceSection";

const servicesList = [
  {
    id: 1,
    service: "Career Counseling",
    heading: "Personalized Career Counseling",
    subheading: "Guiding Your Future, One Step at a Time",
    introduction:
      "At Destiny Euro, we understand that choosing the right career path can be daunting. Our personalized career counseling services are designed to help you navigate your educational and professional journey with confidence.",
    imageUrl:
      "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg",
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
  {
    id: 2,
    service: "University and Program Matching",
    heading: "Find Your Perfect University and Program",
    subheading: "Tailored Guidance to Match Your Academic Ambitions",
    introduction:
      "Choosing the right university and program is crucial for your academic success. Destiny Euro offers comprehensive support to help you find the best fit for your educational and career goals.",
    imageUrl:
      "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723044994/destiny-euro/pexels-photo-256455_nnh9tl.jpg",
    sections: [
      {
        title: "Why It Matters",
        points: [
          "Program Relevance: Ensure the program aligns with your career goals and interests.",
          "University Reputation: Choose institutions with strong academic reputations and global recognition.",
          "Future Opportunities: Consider future career prospects and opportunities for further studies.",
        ],
      },
      {
        title: "Our Methodology",
        points: [
          "Profile Assessment: Evaluate your academic history, achievements, and career goals.",
          "Research: Extensive research into universities and programs that fit your criteria.",
          "Shortlisting: Provide a list of recommended universities and programs.",
          "Decision Making: Assist in making the final decision based on thorough analysis.",
        ],
      },
      {
        title: "Case Studies",
        points: [
          "Emily Doe: Found her ideal program in Data Science at a top university in Germany.",
          "Jack Jae: Successfully enrolled in a prestigious Business Management program in the UK.",
        ],
      },
      {
        title: "Steps to Success",
        points: [
          "Consultation: Discuss your interests and goals with our advisors.",
          "Research and Shortlist: Receive a curated list of programs and universities.",
          "Apply with Confidence: Get support throughout the application process.",
        ],
      },
    ],
    callToAction:
      "Let us help you find the perfect university and program today!",
  },
  {
    "id": 3,
    "service": "Documentation Services",
    "heading": "Hassle-Free Documentation Services",
    "subheading": "We Handle the Paperwork, So You Don’t Have To",
    "introduction": "Navigating the documentation process can be complex and time-consuming. At Destiny Euro, we simplify this process, ensuring all your paperwork is in order for a smooth transition.",
    "imageUrl": "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723045172/destiny-euro/pexels-photo-8453934_uronft.jpg",
    "sections": [
      {
        "title": "The Importance of Proper Documentation",
        "points": [
          "Accuracy: Ensure all documents are accurate and meet the requirements.",
          "Timeliness: Submit all documents within the required deadlines.",
          "Compliance: Adhere to all legal and institutional regulations."
        ]
      },
      {
        "title": "Our Services",
        "points": [
          "Document Checklist: Provide a comprehensive checklist of required documents.",
          "Verification: Verify the authenticity and accuracy of all documents.",
          "Submission: Assist in the submission of documents to universities and authorities.",
          "Follow-Up: Track the status of your applications and ensure timely responses."
        ]
      },
      {
        "title": "Commonly Required Documents",
        "points": [
          "Academic Transcripts: Obtain and certify your academic records.",
          "Letters of Recommendation: Guide you in securing strong recommendation letters.",
          "Personal Statements: Help you craft compelling personal statements.",
          "Financial Documents: Ensure all financial documentation is complete and accurate."
        ]
      },
      {
        "title": "Real Stories",
        "points": [
          "Denis Slavaska: Successfully navigated the documentation process for a scholarship in France.",
          "Sara Ahmed: Smoothly handled her visa documentation with our support."
        ]
      },
      {
        "title": "Getting Started",
        "points": [
          "Initial Consultation: Discuss your documentation needs with our experts.",
          "Document Preparation: Begin preparing and gathering all necessary documents.",
          "Ongoing Support: Receive continuous support until your documentation is complete."
        ]
      }
    ],
    "callToAction": "Simplify your documentation process with our expert assistance!"
  },
  {
    "id": 4,
    "service": "Scholarship Guidance",
    "heading": "Unlock Scholarship Opportunities",
    "subheading": "Maximize Your Chances of Securing Financial Aid",
    "introduction": "At Destiny Euro, we believe financial constraints should not hinder your academic dreams. Our scholarship guidance services help you identify and apply for scholarships to support your education abroad.",
    "imageUrl": "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723045302/destiny-euro/merit3_re1kwi.jpg",
    "sections": [
      {
        "title": "Why Scholarships Matter",
        "points": [
          "Financial Relief: Reduce the financial burden of studying abroad.",
          "Merit Recognition: Gain recognition for your academic and extracurricular achievements.",
          "Enhanced Opportunities: Access to better educational and career prospects."
        ]
      },
      {
        "title": "Our Approach",
        "points": [
          "Research: Identify available scholarships based on your profile.",
          "Eligibility Check: Ensure you meet all eligibility criteria for the scholarships.",
          "Application Assistance: Guide you through the scholarship application process.",
          "Document Preparation: Help you prepare all required documents and essays."
        ]
      },
      {
        "title": "Types of Scholarships",
        "points": [
          "Merit-Based: Awards for academic excellence.",
          "Need-Based: Financial aid based on economic need.",
          "Program-Specific: Scholarships for specific fields of study.",
          "Country-Specific: Scholarships offered by specific countries or universities."
        ]
      },
      {
        "title": "Success Stories",
        "points": [
          "Maria Rossi: Received a full scholarship for her Master’s program in Italy.",
          "Anil Kumar: Awarded a need-based scholarship for his studies in the UK."
        ]
      },
      {
        "title": "How to Apply",
        "points": [
          "Initial Assessment: Evaluate your eligibility for various scholarships.",
          "Application Preparation: Assist in preparing and submitting scholarship applications.",
          "Follow-Up: Track the progress of your applications and provide updates."
        ]
      }
    ],
    "callToAction": "Discover scholarship opportunities and apply with confidence!"
  },
  {
    "id": 5,
    "service": "Visa Assistance",
    "heading": "Expert Visa Assistance",
    "subheading": "Navigating the Complex Visa Process with Ease",
    "introduction": "Securing a student visa is a critical step in your study abroad journey. Destiny Euro provides expert visa assistance to ensure a smooth and successful visa application process.",
    "imageUrl": "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723045400/destiny-euro/1703757639666_xkxowp.jpg",
    "sections": [
      {
        "title": "The Importance of Visa Assistance",
        "points": [
          "Compliance: Ensure you meet all visa requirements and regulations.",
          "Accuracy: Submit accurate and complete visa applications.",
          "Timeliness: Avoid delays and ensure timely submission of your visa application."
        ]
      },
      {
        "title": "Our Services",
        "points": [
          "Visa Requirements: Provide detailed information on visa requirements for different countries.",
          "Application Assistance: Guide you through the visa application process.",
          "Document Preparation: Help you prepare all necessary documents for your visa application.",
          "Interview Preparation: Offer tips and mock interviews to prepare you for your visa interview."
        ]
      },
      {
        "title": "Common Visa Requirements",
        "points": [
          "Application Form: Assist in filling out the visa application form correctly.",
          "Passport: Ensure your passport is valid and meets all requirements.",
          "Financial Proof: Help you gather and prepare financial documents.",
          "Admission Letter: Ensure you have a valid admission letter from your chosen university."
        ]
      },
      {
        "title": "Success Stories",
        "points": [
          "Rahul Mehta: Successfully obtained his student visa for Germany.",
          "Sofia Garcia: Navigated the UK visa process with our expert guidance."
        ]
      },
      {
        "title": "How to Get Started",
        "points": [
          "Consultation: Discuss your visa requirements and process with our experts.",
          "Document Preparation: Begin preparing all necessary documents with our help.",
          "Application Submission: Submit your visa application with confidence."
        ]
      }
    ],
    "callToAction": "Secure your student visa with our expert assistance!"
  },
  {
    "id": 6,
    "service": "Accommodation Assistance",
    "heading": "Find Your Ideal Accommodation",
    "subheading": "Comfortable and Convenient Living Arrangements for Your Stay Abroad",
    "introduction": "Finding suitable accommodation can be challenging, especially in a new country. Destiny Euro offers comprehensive support to help you find comfortable and convenient living arrangements.",
    "imageUrl": "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723045467/destiny-euro/135407_t39msy.jpg",
    "sections": [
      {
        "title": "Why Accommodation Matters",
        "points": [
          "Comfort: Ensure you have a comfortable place to live while studying.",
          "Convenience: Find accommodation close to your university and essential amenities.",
          "Safety: Secure safe and reliable housing options."
        ]
      },
      {
        "title": "Our Services",
        "points": [
          "Accommodation Options: Provide a range of accommodation options based on your preferences and budget.",
          "Booking Assistance: Assist in booking your chosen accommodation.",
          "Arrival Arrangements: Help you settle into your accommodation upon arrival.",
          "Ongoing Support: Offer support for any accommodation-related issues during your stay."
        ]
      },
      {
        "title": "Types of Accommodation",
        "points": [
          "University Dormitories: On-campus housing options for convenience.",
          "Private Apartments: Independent living arrangements with more privacy.",
          "Shared Housing: Cost-effective options for sharing accommodation with other students.",
          "Homestays: Experience local culture by living with a host family."
        ]
      },
      {
        "title": "Success Stories",
        "points": [
          "Nina Patel: Found a perfect apartment near her university in Italy.",
          "Lucas Fernandez: Secured safe and affordable shared housing in France."
        ]
      },
      {
        "title": "How to Get Started",
        "points": [
          "Consultation: Discuss your accommodation needs and preferences with our advisors.",
          "Option Shortlisting: Receive a list of recommended accommodation options.",
          "Booking and Arrival: Assist in booking and settling into your new home."
        ]
      }
    ],
    "callToAction": "Find your ideal accommodation with our comprehensive support!"
  }
  
  
  
  
];

const Services = () => {
  return (
    <>
      {servicesList.map((service) => (
        <ServiceSection service={service} />
      ))}
    </>
  );
};

export default Services;
