import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "https://via.placeholder.com/50",
    name: "Emily Dee",
    university: "University of Essex",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Condimentum amet eget nibh sagittis lacus est risus aliquet proin.",
  },
  {
    image: "https://via.placeholder.com/50",
    name: "Jack Jae",
    university: "University of Essex",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Condimentum amet eget nibh sagittis lacus est risus aliquet proin.",
  },
  {
    image: "https://via.placeholder.com/50",
    name: "Denis Slavasko",
    university: "University of Essex",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Condimentum amet eget nibh sagittis lacus est risus aliquet proin.",
  },
  {
    image: "https://via.placeholder.com/50",
    name: "Emily Dee",
    university: "University of Essex",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Condimentum amet eget nibh sagittis lacus est risus aliquet proin.",
  },
  {
    image: "https://via.placeholder.com/50",
    name: "Jack Jae",
    university: "University of Essex",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Condimentum amet eget nibh sagittis lacus est risus aliquet proin.",
  },
  {
    image: "https://via.placeholder.com/50",
    name: "Denis Slavasko",
    university: "University of Essex",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Condimentum amet eget nibh sagittis lacus est risus aliquet proin.",
  },
];

const Testimonial = ({ name, university, quote, image }) => (
  <div className="flex flex-col border rounded-lg p-4 pt-8 gap-3 bg-white h-80  shadow-lg">
    <div className="flex items-center  mb-4">
      <div className="avatar">
        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
    <p className="text-lg font-medium text-graphite font-poppins">{quote}</p>
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
      What Our <span className="text-flyBlue">Students</span>  Say
    </h2>
    <div className=" ">
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
