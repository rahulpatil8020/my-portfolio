import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      // additionalTransform={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite={true}
      responsive={responsive}
      itemClass="item"
    >
      <ClientReview
        image="/images/c1.jpg"
        name="Rahul Patil"
        role="Web Developer"
      />
      <ClientReview
        image="/images/c2.jpg"
        name="Rohan Jadhav"
        role="Java Developer"
      />
      <ClientReview
        image="/images/c1.jpg"
        name="Devang Borase"
        role="React Developer"
      />
      <ClientReview
        image="/images/c2.jpg"
        name="Vaibhav Patil"
        role="Fullstack Developer"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
