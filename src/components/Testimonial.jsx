import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723717451/destiny-euro/Tejas_2_i8qkwb.png",
    name: "Tejas Krishnamurthy",
    university: "Sapienza University of Rome",
    quote:
      "Studying at Sapienza University was a game-changer. The PhD research opportunities have been incredible!",
  },
  {
    image: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723717452/destiny-euro/Keerthana_1_ydyx4e.png",
    name: "Keerthana Paruchuri",
    university: "University of Rome Tor Vergata",
    quote:
      "My time at University of Rome Tor Vergata for engineering was excellent. The faculty and resources were top-notch!",
  },
  {
    image: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723717452/destiny-euro/Christopher_1_nxoegx.png",
    name: "Ronal Christopher",
    university: "University of Bologna",
    quote:
      "Graduating with a Master’s in Finance from the University of Bologna was a highlight. The program provided exceptional insights and connections!",
  },
  {
    image: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723717449/destiny-euro/Krishna_iy9koe.png",
    name: "Krishna Elango",
    university: "University of Rome Tor Vergata",
    quote:
      "Pursuing my Masters in Mechatronics at University of Rome Tor Vergata has been a fantastic experience. Great learning environment!",
  },
  {
    image: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723717454/destiny-euro/Eva_1_eswrbt.png",
    name: "Evangelina Pagare",
    university: "Sapienza University of Rome",
    quote:
      "Sapienza’s Classics program is truly enriching. I’m thoroughly enjoying my studies and the vibrant campus life!",
  },
  {
    image: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1723717445/destiny-euro/Shibin_1_qkkerf.png",
    name: "Shibin Shaji",
    university: "University of Cassino",
    quote:
      "The University of Cassino has offered me a solid education in Economics and Management. The experience has been very rewarding!",
  },
];

const Testimonial = ({ name, university, quote, image }) => (
  <div className="flex flex-col border rounded-lg p-4 pt-8 gap-3 bg-white h-80  shadow-lg">
    <div className="flex items-center  mb-4">
      <div className="avatar">
        <div className="w-12 h-12 rounded-full ring ring-flyBlue ring-offset-base-300 ring-offset-2">
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
    <p className="text-md  py-3 md:py-0 font-bold   text-gray-500  leading-5 font-poppins">{quote}</p>
    <div className=" border-l-2 border-flyBlue pl-3">
      <h3 className=" font-bold font-poppins text-flyBlue">{name}</h3>
      <p className="text-sm text-gray-500 font-poppins">{university}</p>
    </div>
  </div>
);
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  swipe: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Testimonials = () => (
  <section className=" px-8  py-16 lg:px-40 bg-baseGrey">
    <h2 className=" pl-5 text-2xl md:text-3xl font-bold text-left mb-8 font-poppins">
      University Reviews By <span className="text-flyBlue">Students</span>
    </h2>
    <div className=" py-7">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            name={testimonial.name}
            university={testimonial.university}
            quote={testimonial.quote}
            image={testimonial.image}
          />
        ))}
      </Slider>
    </div>
  </section>
);

export default Testimonials;
