import React, { useState } from "react";
import Italy from "../assets/italy-des.jpg";
import Germany from "../assets/germany-des.jpg";
import France from "../assets/france-des.png";
import UK from "../assets/uk-des.jpg";
import Poland from "../assets/poland-des.jpg";
import TopUniversities from "../components/TopUniversities";
import EducationSystem from "../components/EducationSystem";
import ScholarshipSection from "../components/ScholarshipSection";
import CountryIntroduction from "../components/CountryIntroduction";
import HighlightsSection from "../components/HighlightsSection";
import StudentCulture from "../components/StudentCulture";
import Courses from "../components/Courses";

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
        image:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722247860/ita_ug82d2.jpg",
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
        title:
          "Scholarships and Financial Aid in Italy: A Comprehensive Guide to Funding Your Education",
        points: [
          "Government Scholarships: Available for international students.",
          "University Scholarships: Each university offers its own range of scholarships based on merit and financial need.",
          "Regional Scholarships: Provided by regional authorities, covering tuition fees and living expenses.",
        ],
      },
      {
        title: "Student Life and Culture",
        image1:
          "https://i0.wp.com/www.touristitaly.com/wp-content/uploads/2024/01/shutterstock_1008425929.jpg?resize=1024%2C683&ssl=1",
        image2:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722590029/destiny-euro/italy-images/pizza-calabrese-tomato_sbxyfw.jpg",
        image3:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722583703/destiny-euro/italy-images/pexels-photo-4046386_tfr7fe.jpg",
        points: [
          "Vibrant Student Communities: Engage in various student organizations and cultural activities.",
          "Festivals and Events: Enjoy numerous festivals, from Venice Carnival to Milan Fashion Week.",
          "Cuisine: Indulge in world-famous Italian cuisine, from pasta and pizza to gelato.",
        ],
      },
      {
        title: "Popular Courses in Italy",
        description:
          "Italy is renowned for its rich cultural heritage and educational excellence, making it a popular destination for students worldwide. The country offers a wide array of courses that attract international students.",
        points: [
          "Design $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722599712/destiny-euro/italy-images/icons8-design-64_i47txt.png",
          "Architecture $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722667421/destiny-euro/italy-images/icons8-architecture-80_om529q.png",
          "Culinary Arts $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722667452/destiny-euro/italy-images/icons8-culinary-50_auti5p.png",
          "Economics $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722669275/destiny-euro/italy-images/icons8-profit-report-50_ftyst3.png",
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
        image:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722250248/destiny-euro/germany-images/berlin_germany.width-1110_cfwkwd.jpg",
        points: [
          "Higher Education Institutions: Includes universities, universities of applied sciences, and technical universities.#https://res.cloudinary.com/dynbpb9u0/image/upload/v1722249842/destiny-euro/italy-images/icons8-education-100_xprjqp.png",
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
        title:
          "Scholarships and Financial Aid in Germany: A Comprehensive Guide to Funding Your Education",
        points: [
          "DAAD Scholarships: Offered by the German Academic Exchange Service for international students.",
          "University Scholarships: Various universities provide scholarships based on merit and need.",
          "Private Foundations: Numerous private organizations offer scholarships for specific fields of study.",
        ],
      },
      {
        title: "Student Life and Culture",
        image1:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722584883/destiny-euro/germany-images/pexels-photo-9318518_vs7yjx.jpg",
        image2:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722584326/destiny-euro/germany-images/pexels-photo-12265857_gsn5ec.jpg",
        image3:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722584728/destiny-euro/germany-images/pexels-photo-6053701_qpqgdn.jpg",
        points: [
          "Dynamic Student Communities:Engage with like-minded individuals, explore new interests, and develop valuable skills that will enrich your academic journey and beyond.",
          "Cultural Experiences: Immerse yourself in Germany's vibrant culture and rich heritage! Discover the country's fascinating history, from medieval castles to modern museums. ",
          "Cuisine: Savor traditional German dishes like pretzels, sausages, and schnitzel.",
        ],
      },
      {
        title: "Popular Courses in Germany",
        description:
          "Germany is well-known for its high-quality education system and strong emphasis on research and innovation. It attracts a significant number of international students with its diverse and prestigious academic programs.",
        points: [
          "Engineering $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674221/destiny-euro/germany-images/icons8-engineering-50_ysc2z2.png",
          "Computer Science $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674221/destiny-euro/germany-images/icons8-coding-50_feahkf.png",
          "Business Administration $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722669489/destiny-euro/germany-images/icons8-business-strategy-60_b0luau.png",
          "Natural Sciences $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674221/destiny-euro/germany-images/icons8-physics-50_nayisf.png",
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
        image:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722591499/destiny-euro/france-images/versailles-94571_r5nq33.jpg",
        points: [
          "Education System: French universities and Grandes Écoles are known for their high standards and innovative programs.",
          "Degree Structure: Licence (Bachelor's), Master's, and Doctorate degrees, with a focus on academic excellence and critical thinking.",
          "Language of Instruction: While French is the primary language, many programs are offered in English, especially at the Master's and Doctorate levels.",
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
        title:
          "Scholarships and Financial Aid in France: A Comprehensive Guide to Funding Your Education",
        points: [
          "Eiffel Excellence Scholarship Program: Offered by the French Ministry for Europe and Foreign Affairs for international students.",
          "Université Paris-Saclay International Master's Scholarships: Scholarships for international students enrolling in master’s programs at Université Paris-Saclay.",
          "École Normale Supérieure (ENS) International Selection: Scholarships for international students to study at ENS in Paris or Lyon.",
          "Region-Specific Scholarships: Various regional councils in France provide scholarships for students studying in their area.",
        ],
      },

      {
        title: "Student Life and Culture",
        image1:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722586826/destiny-euro/france-images/free-photo-of-arles-town-in-france_c5wac1.jpg",
        image2:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722586627/destiny-euro/france-images/free-photo-of-cupcakes-in-a-kitchen_ddxw8d.jpg",
        image3:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722586904/destiny-euro/france-images/pexels-photo-460740_f4nrvo.jpg",
        points: [
          "Dynamic Student Communities: Engage with passionate peers, explore diverse interests, and enhance your skills through vibrant student activities.",
          "Cultural Experiences: Immerse yourself in France's rich heritage! Explore iconic landmarks like the Eiffel Tower and the Louvre.",
          "Cuisine: Delight in France's culinary offerings, from baguettes and pastries to coq au vin and renowned wines and cheeses.",
        ],
      },
      {
        title: "Popular Courses in France",
        description:
          "France is celebrated for its vibrant culture, artistic heritage, and world-class education system. It offers a variety of courses that draw students from around the globe, particularly in fields that reflect its cultural and economic strengths.",
        points: [
          "Arts $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674736/destiny-euro/france-images/inspiration_l6j7ee.png",
          "Fashion $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674736/destiny-euro/france-images/dress_tc8sqv.png",
          "Business $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674904/destiny-euro/france-images/growth_hx56jd.png",
          "Engineering $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674221/destiny-euro/germany-images/icons8-engineering-50_ysc2z2.png",
        ],
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
        image:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722594987/destiny-euro/uk-images/wide_fullhd_united-kingdom_skugg3.jpg",
        points: [
          "Education System: UK universities are recognized for their rigorous academic programs and research excellence.",
          "Diverse Course Offerings: The UK offers a wide range of courses and programs, including unique specializations not commonly found elsewhere, catering to a variety of interests and career goals.",
          "International Recognition: Degrees from UK institutions are highly regarded globally, providing graduates with a competitive edge in the international job market.",
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
        title:
          "Scholarships and Financial Aid in UK: A Comprehensive Guide to Funding Your Education",
        points: [
          "Chevening Scholarships: Offered by the UK government for international students.",
          "Commonwealth Scholarships: For students from Commonwealth countries.",
          "GREAT Scholarships: Funded by the UK government and British universities for international students.",
          "University-Specific Scholarships: Various UK universities provide scholarships based on merit and need.",
        ],
      },

      {
        title: "Student Life and Culture",
        image1:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722595145/destiny-euro/uk-images/pexels-photo-1427569_jucage.jpg",
        image2:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722589401/destiny-euro/uk-images/shepherdspie_2077_16x9_yex5zm.jpg",
        image3:
          "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        points: [
          "Dynamic Student Communities: Connect with like-minded students, explore diverse interests, and develop valuable skills through vibrant campus activities.",
          "Cultural Experiences: Discover the UK's rich heritage! Visit landmarks like Buckingham Palace, Stonehenge, and the British Museum.",
          "Cuisine: Enjoy traditional British dishes like fish and chips, shepherd's pie, and afternoon tea. Savor the unique flavors of British cuisine.",
        ],
      },
      {
        title: "Popular Courses in UK",
        description:
          "The United Kingdom is known for its prestigious universities and diverse academic offerings. It is a top destination for international students seeking high-quality education and a rich cultural experience.",
        points: [
          " Business $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674904/destiny-euro/france-images/growth_hx56jd.png",
          "Engineering $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674221/destiny-euro/germany-images/icons8-engineering-50_ysc2z2.png",
          "Medicine $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722675202/destiny-euro/france-images/medicine_rwckan.png",
          "Humanities $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722675201/destiny-euro/france-images/humanity_ypxbwb.png",
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
        image:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722594768/destiny-euro/poland-images/pexels-photo-13357697_n4avul.jpg",
        points: [
          "Education System: Polish universities offer a wide range of programs with a strong focus on research and innovation.",
          "Quality of Education: Polish universities are known for their high academic standards and rigorous curricula.",
          "Tuition Fees and Scholarships: Poland offers relatively low tuition fees and numerous scholarships for students.",
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
        title:
          "Scholarships and Financial Aid in Poland: A Comprehensive Guide to Funding Your Education",
        points: [
          "Poland Government Scholarship: Offered by the Polish National Agency for Academic Exchange (NAWA) for international students.",
          "University Scholarships: Various Polish universities provide scholarships based on merit and need.",
          "Erasmus+ Program: EU-funded scholarships for international students studying in Poland.",
          "Ignacy Łukasiewicz Scholarship Program: For students from developing countries pursuing higher education in Poland.",
        ],
      },

      {
        title: "Student Life and Culture",
        image1:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722590354/destiny-euro/poland-images/poland-wawel-castle-and-cathedral-krakow_ttgrtk.jpg",
        image2:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722590259/destiny-euro/poland-images/Pierogi_500-scaled_j9xrez.jpg",
        image3:
          "https://res.cloudinary.com/dynbpb9u0/image/upload/v1722590438/destiny-euro/poland-images/shutterstock-2100833263-scaled_bacffz.jpg",
        points: [
          "Dynamic Student Communities: Engage with fellow students, explore new interests, and develop valuable skills through vibrant campus activities.",
          "Cultural Experiences: Immerse yourself in Poland's rich heritage! Visit historical sites like Wawel Castle and the Wieliczka Salt Mine.",
          "Cuisine: Enjoy traditional Polish dishes like pierogi, kielbasa, and bigos. Savor the hearty and unique flavors of Polish cuisine.",
        ],
      },
      {
        title: "Popular Courses in Poland",
        description:
          "Poland is home to a diverse range of academic programs, attracting students from around the world with its high-quality education and affordable tuition fees. The country offers a blend of traditional and modern courses, tailored to meet the evolving demands of various industries. Polish universities are renowned for their rigorous academic standards and vibrant campus life, providing an enriching environment for both personal and professional growth.",
          points: [
            " Business $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674904/destiny-euro/france-images/growth_hx56jd.png",
            "Engineering $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722674221/destiny-euro/germany-images/icons8-engineering-50_ysc2z2.png",
            "Medicine $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722675202/destiny-euro/france-images/medicine_rwckan.png",
            "Humanities $https://res.cloudinary.com/dynbpb9u0/image/upload/v1722675201/destiny-euro/france-images/humanity_ypxbwb.png",
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
              <HighlightsSection
                setCountry={setCountry}
                destination={destination}
              />
            ))}
          </div>

          <CountryIntroduction destination={destination} />
        </div>
      </div>
      {/* top universities */}
      <TopUniversities universities={destination.sections[2]} />
      {/* education system */}
      <EducationSystem system={destination.sections[1]} />
      <ScholarshipSection scholarship={destination.sections[3]} />
      <StudentCulture culture={destination.sections[4]} />

      <Courses course={destination.sections[5]} />
    </>
  );
};

export default Destinations;
