import React, { useState } from "react";
import Italy from "../assets/italy-des.jpg";
import Germany from "../assets/germany-des.jpg";
import France from "../assets/france-des.png";
import UK from "../assets/uk-des.jpg";
import Poland from "../assets/poland-des.jpg";
import TopUniversities from "../components/TopUniversities";

const destinations = [
  {
    name: "italy",
    heading: "Study in Italy",

    subheading: "Discover the Heart of Culture, Art, and Academic Excellence",
    image:
      "https://images.pexels.com/photos/2748019/pexels-photo-2748019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    loc_image:
      "https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    introduction:
      "Italy, a country renowned for its rich cultural heritage, historical significance, and academic prowess, is an ideal destination for international students. With a blend of world-class universities, vibrant student life, and unparalleled artistic and culinary experiences, studying in Italy is a dream come true.",
    sections: [
      {
        title: "Why Study in Italy?",
        points: [
          "Cultural Richness:  Immerse yourself in Italy's unparalleled art, history, and culture.",
          "Academic Excellence: Home to some of the oldest and most prestigious universities in the world.",
          "Beautiful Landscapes: From the Alps in the north to the Mediterranean coastlines in the south, Italy's natural beauty is breathtaking.",
          "Affordable Education: Tuition fees and living costs are relatively lower compared to other European countries.",
        ],
      },
      {
        title: "Education System in Italy",
        points: [
          "Higher Education Structure: Divided into three cycles – Bachelor’s (Laurea Triennale), Master’s (Laurea Magistrale), and Doctorate (Dottorato di Ricerca).",
          "ECTS Credits: Follows the European Credit Transfer and Accumulation System, facilitating credit transfer across Europe.",
          "Language of Instruction: Many programs are available in English, particularly at the postgraduate level.",
        ],
      },
      {
        title: "Top Universities in Italy",
        points: [
          "University of Bologna: Established in 1088, it's the oldest university in the world.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721904401/destiny-euro/italy-images/University_of_Bologna_u4dfs4.jpg",
          "Sapienza University of Rome: Known for its research excellence and diverse academic offerings.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721929260/destiny-euro/italy-images/sapienza%20university%20of%20rome.jpg",
          "Politecnico di Milano: Top-ranked for engineering, architecture, and design.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721929710/destiny-euro/italy-images/csm_01_Hero_Politecnico_1920_vs9_6d87e15009_pgi1tq.jpg",
          "University of Padua: Famous for its pioneering research and academic traditions.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721929963/destiny-euro/italy-images/Padua_201_fujsu1.jpg",
          "University of Milan: Offers a wide range of programs and has a vibrant student life.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721930089/destiny-euro/italy-images/University%20of%20Milan.jpg",
          "Scuola Normale Superiore di Pisa: Renowned for its high academic standards.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721930377/destiny-euro/italy-images/scuola%20normale%20superiore%20di%20pisa.jpg",
          "University of Pisa: Known for its strong emphasis on science and technology.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721930903/destiny-euro/italy-images/pisa-_C3_BCniversitesi-pavaedu-7853-1024x721_bnmxpk.jpg",
          "Politecnico di Torino: Excellent for engineering and technical studies.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721974361/destiny-euro/italy-images/Politecnico%20di%20Torino.jpg",
          "Ca' Foscari University of Venice: Offers unique programs in economics, languages, and international relations.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721974909/destiny-euro/italy-images/ca%27%20foscari%20university%20of%20venice.jpg",
          "University of Florence: Famous for arts and humanities.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1721975104/destiny-euro/italy-images/University%20of%20Florence.jpg",
        ],
      },

      {
        title: "Scholarships and Financial Aid",
        points: [
          "Government Scholarships: Available for international students.",
          "University Scholarships: Each university offers its own range of scholarships based on merit and financial need.",
          "Regional Scholarships: Provided by regional authorities, covering tuition fees and living expenses.",
        ],
      },
      {
        title: "Student Life and Culture",
        points: [
          "Vibrant Student Communities: Engage in various student organizations and cultural activities.",
          "Festivals and Events: Enjoy numerous festivals, from Venice Carnival to Milan Fashion Week.",
          "Cuisine: Indulge in world-famous Italian cuisine, from pasta and pizza to gelato.",
        ],
      },
      {
        title: "Popular Courses in Italy",
        points: [
          "Popular Courses: Design, Architecture, Culinary Arts, and Economics.",
        ],
      },

      {
        title: "Exploring Italy",
        points: [
          "Travel Opportunities: Easy access to explore iconic cities like Rome, Florence, Venice, and Milan.",
          "Natural Beauty: Experience the Amalfi Coast, the lakes of Lombardy, and the Dolomites.",
        ],
      },
    ],
    call_to_action:
      "Embark on an unforgettable academic journey in Italy. Apply now and let Destiny Euro guide you to your future!",
  },
  {
    name: "germany",
    heading: "Study in Germany",
    subheading: "Innovative Education in the Heart of Europe",
    image: Germany,
    loc_image:
      "https://images.pexels.com/photos/4213372/pexels-photo-4213372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    introduction:
      "Germany, known for its advanced technological landscape and high-quality education system, offers a perfect blend of tradition and innovation. With a strong focus on research and development, Germany is an excellent choice for students seeking cutting-edge education and diverse cultural experiences.",
    sections: [
      {
        title: "Why Study in Germany?",
        points: [
          "High Academic Standards: Germany boasts some of the best universities globally, known for their rigorous academic standards.",
          "Tuition-Free Education: Public universities often charge no tuition fees for undergraduate studies.",
          "Research Opportunities: Strong emphasis on research with ample funding and facilities.",
          "Central Location: Located in the heart of Europe, providing easy access to other European countries.",
        ],
      },
      {
        title: "Education System in Germany",
        points: [
          "Higher Education Institutions: Includes universities, universities of applied sciences, and technical universities.",
          "Degree Structure: Bachelor's, Master's, and Doctorate degrees with a strong emphasis on research.",
          "Language of Instruction: Many programs, especially at the Master’s level, are offered in English.",
        ],
      },
      {
        title: "Top Universities in Germany",
        points: [
          "Technical University of Munich (TUM): Leading university for engineering and technology.",
          "Ludwig Maximilian University of Munich (LMU): Known for humanities and social sciences.",
          "Heidelberg University: Renowned for research and medical programs.",
          "Humboldt University of Berlin: Strong focus on arts and humanities.",
          "Free University of Berlin: Famous for social sciences and natural sciences.",
          "Karlsruhe Institute of Technology (KIT): Top-ranked for engineering and natural sciences.",
          "RWTH Aachen University: Leading technical university with a focus on engineering.",
          "University of Mannheim: Known for its excellent business school.",
          "University of Freiburg: Offers a wide range of programs with a strong research focus.",
          "University of Stuttgart: Renowned for engineering and technology programs.",
        ],
      },

      {
        title: "Scholarships and Financial Aid",
        points: [
          "DAAD Scholarships: Offered by the German Academic Exchange Service for international students.",
          "University Scholarships: Various universities provide scholarships based on merit and need.",
          "Private Foundations: Numerous private organizations offer scholarships for specific fields of study.",
        ],
      },
      {
        title: "Student Life and Culture",
        points: [
          "Dynamic Student Communities: Participate in diverse student organizations and events.",
          "Cultural Experiences: Enjoy Germany’s rich history, art, and cultural festivals.",
          "Cuisine: Savor traditional German dishes like pretzels, sausages, and schnitzel.",
        ],
      },
      {
        title: "Popular Courses in Germany",
        points: [
          "Popular Courses: Engineering, Computer Science, Business Administration, and Natural Sciences.",
        ],
      },

      {
        title: "Exploring Germany",
        points: [
          "Travel Opportunities: Discover historic cities like Berlin, Munich, and Heidelberg.",
          "Natural Beauty: Explore the Black Forest, Bavarian Alps, and Rhine Valley.",
        ],
      },
    ],
    call_to_action:
      "Take the first step towards an extraordinary education in Germany. Apply now and let Destiny Euro pave the way for your success!",
  },
  {
    name: "france",
    heading: "Study in France",
    subheading: "Experience Excellence in France: A Blend of Art and Science",
    image: France,
    loc_image:
      "https://images.pexels.com/photos/2738173/pexels-photo-2738173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    introduction:
      "France offers an exceptional educational experience, combining academic rigor with cultural richness. It is a top choice for students seeking a diverse and inclusive environment.",
    sections: [
      {
        title: "Why Study in France?",
        points: [
          "Academic Excellence: France offers high-quality education, research, and innovation, with globally recognized universities.",
          "Cultural Immersion: Study in France to learn French, appreciate European culture, and gain a unique cultural experience.",
        ],
      },
      {
        title: "Education System in France",
        points: [
          "Education System: French universities and Grandes Écoles are known for their high standards and innovative programs.",
        ],
      },
      {
        title: "Top Universities in France",
        points: [
          "Sorbonne University: A historic institution known for humanities.",
          "École Normale Supérieure (ENS): A leading school for science and humanities.",
          "HEC Paris: Top-ranked business school.",
        ],
      },
      {
        title: "Scholarships and Financial Aid",
        points: [
          "Eiffel Excellence Scholarship Program: Offered by the French Ministry for Europe and Foreign Affairs for international students.",
          "Université Paris-Saclay International Master's Scholarships: Scholarships for international students enrolling in master’s programs at Université Paris-Saclay.",
          "École Normale Supérieure (ENS) International Selection: Scholarships for international students to study at ENS in Paris or Lyon.",
          "Region-Specific Scholarships: Various regional councils in France provide scholarships for students studying in their area.",
        ],
      },

      {
        title: "Student Life and Culture",
        points: [
          "Culture & Lifestyle: France is synonymous with culture, fashion, and cuisine. Students can enjoy a rich cultural life with numerous museums, theaters, and cafes.",
        ],
      },
      {
        title: "Popular Courses in France",
        points: ["Popular Courses: Arts, Fashion, Business, and Engineering."],
      },

      {
        title: "Exploring France",
        points: [
          "Living in France: France offers a high quality of life, with vibrant cities like Paris, Lyon, and Toulouse.",
        ],
      },
    ],
    call_to_action:
      "Take the first step towards an extraordinary education in France. Apply now and let Destiny Euro pave the way for your success!",
  },
  {
    name: "uk",
    heading: "Study in uk",
    subheading: "Achieve Greatness in the UK: A Legacy of Learning",
    image: UK,
    loc_image:
      "https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    introduction:
      "The UK is home to some of the world's most prestigious universities, offering a rich academic tradition and innovative research opportunities.",
    sections: [
      {
        title: "Why Study in UK?",
        points: [
          "Best education: The UK boasts some of the world's oldest and most highly ranked universities, with four in the top ten globally.",
          "Support for international students: Many UK universities offer support and resources for international students, including pre-arrival assistance and orientation programs.",
        ],
      },
      {
        title: "Education System in UK",
        points: [
          "⦁	Education System: UK universities are recognized for their rigorous academic programs and research excellence.",
        ],
      },
      {
        title: "Top Universities in UK",
        points: [
          "University of Oxford: The oldest university in the English-speaking world.",
          "University of Cambridge: Renowned for its research and academic excellence.",
          "Imperial College London: Leading in science, engineering, and business.",
        ],
      },
      {
        title: "Scholarships and Financial Aid",
        points: [
          "Chevening Scholarships: Offered by the UK government for international students.",
          "Commonwealth Scholarships: For students from Commonwealth countries.",
          "GREAT Scholarships: Funded by the UK government and British universities for international students.",
          "University-Specific Scholarships: Various UK universities provide scholarships based on merit and need.",
        ],
      },

      {
        title: "Student Life and Culture",
        points: [
          "Culture & Lifestyle: The UK is known for its diverse culture, historical landmarks, and vibrant student communities.",
        ],
      },
      {
        title: "Popular Courses in UK",
        points: [
          "Popular Courses: Business, Engineering, Medicine, and Humanities.",
        ],
      },

      {
        title: "Exploring UK",
        points: [
          "Living in the UK: The UK offers a diverse cultural experience, with a blend of historic and modern attractions.",
        ],
      },
    ],
    call_to_action:
      "Take the first step towards an extraordinary education in UK. Apply now and let Destiny Euro pave the way for your success!",
  },
  {
    name: "poland",
    heading: "Study in poland",
    subheading: "Discover Poland: A Hub of Innovation and Tradition",
    image: Poland,
    loc_image:
      "https://images.pexels.com/photos/46273/pexels-photo-46273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    introduction:
      "Poland is emerging as a popular destination for international students, offering high-quality education at affordable costs.",
    sections: [
      {
        title: "Why Study in Poland?",
        points: [
          "Advanced quality of education: With over 450 internationally recognized institutions of higher learning, Poland offers a high-quality education system that adheres to the standards established by the Bologna process.",
          "Affordable tuition costs: Compared to other European countries, Poland is a more affordable option for international students, with average fees ranging between 1000 and 4000 euros per year.",
        ],
      },
      {
        title: "Education System in Poland",
        points: [
          "Education System: Polish universities offer a wide range of programs with a strong focus on research and innovation.",
        ],
      },
      {
        title: "Top Universities in Poland",
        points: [
          "University of Warsaw: Leading in humanities and social sciences.",
          "Jagiellonian University: One of the oldest universities in Europe.",
          "Warsaw University of Technology: Known for engineering and technology.",
        ],
      },
      {
        title: "Scholarships and Financial Aid",
        points: [
          "Poland Government Scholarship: Offered by the Polish National Agency for Academic Exchange (NAWA) for international students.",
          "University Scholarships: Various Polish universities provide scholarships based on merit and need.",
          "Erasmus+ Program: EU-funded scholarships for international students studying in Poland.",
          "Ignacy Łukasiewicz Scholarship Program: For students from developing countries pursuing higher education in Poland.",
        ],
      },

      {
        title: "Student Life and Culture",
        points: [
          "Culture & Lifestyle : Poland boasts a rich cultural heritage, with a vibrant student life and numerous historical sites",
        ],
      },
      {
        title: "Popular Courses in Poland",
        points: [
          "Popular Courses: Engineering, Medicine, Humanities, and Business.",
        ],
      },

      {
        title: "Exploring Poland",
        points: [
          "Living in Poland: Affordable living costs, diverse cultural experiences, and a welcoming environment for international students.",
        ],
      },
    ],
    call_to_action:
      "Take the first step towards an extraordinary education in Germany. Apply now and let Destiny Euro pave the way for your success!",
  },
];

const Destinations = () => {
  const [country, setCountry] = useState("italy");

  const destinationSelect = destinations.filter(
    (destination) => destination.name === country
  );
  const destination = destinationSelect[0];

  return (
    <>
      <div className="min-h-screen bg-baseGrey flex flex-col items-center p-6">
        <div className="max-w-6xl w-full   rounded-lg overflow-hidden">
          <div className="flex justify-around py-4 mb-10 md:px-40  ">
            {/* highlight section */}
            {destinations.map((destination) => (
              <div
                className="text-center hover:scale-125    transition-all duration-500   "
                onClick={() => setCountry(destination.name)}
              >
                <img
                  src={destination.image}
                  alt="Italy"
                  className="w-12 h-12 md:w-16  md:h-16 mx-auto object-cover  rounded-full hover:border-4 hover:border-zinc-200 hover:shadow-lg "
                />
                <p className="mt-2 capitalize font-poppins tracking-wide text-graphite">
                  {destination.name}
                </p>
              </div>
            ))}
          </div>

          <div className="md:p-6  grid grid-cols-1 ">
            <div
              className="relative  bg-cover bg-center rounded-xl overflow-hidden  h-96 object-center"
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative flex items-center justify-center h-full">
                <div className="text-center text-white px-6 md:px-12 lg:px-24">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
                    {destination.heading}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-6 font-poppins">
                    {destination.subheading}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3  py-8 px-1 md:p-8">
              <div className="md:w-1/2 ">
                <h2 className="text-3xl font-bold mb-4 font-poppins">
                  {destination.sections[0].title}
                </h2>
                <p className="text-gray-600 mb-4 font-poppins">
                  {destination.introduction}
                </p>
                <div className="mb-4">
                  {destination.sections[0].points.map((point) => (
                    <div className="flex items-center mb-2 ">
                      <div>
                        <h3 className="font-bold font-poppins text-lg">
                          {point.split(": ")[0]}
                        </h3>
                        <p className="text-gray-600 font-poppins">
                          {point.split(": ")[1]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2   bg-cyan-300 h-4/5 overflow-hidden rounded-lg">
                <img
                  src={destination.loc_image}
                  alt="Adventure"
                  className="w-full h-full  rounded-lg shadow-lg   object-cover object-center"
                />
              </div>
            </div>
          </div>
          {/* <div className="mt-6 p-6  grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="  ">
            <p className=" font-poppins md:max-w-96  ">
              {destination.call_to_action}
            </p>
          </div>
          <div className="">
            <button className="border-2 w-40 bg-white shadow-lg border-flyBlue btn   md:btn-md tracking-wider text-flyBlue font-poppins py-2 px-4 rounded-lg ">
              Apply Now
            </button>
          </div>
        </div> */}
        </div>
      </div>
      {/* top universities */}
      <TopUniversities universities={destination.sections[2]} />
      {/* education system */}
      <div className="min-h-screen  bg-baseGrey flex flex-col items-center p-6">
        <div className="max-w-6xl w-full   rounded-lg overflow-hidden">
          <div className="p-6  grid grid-cols-1 ">education system section</div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
