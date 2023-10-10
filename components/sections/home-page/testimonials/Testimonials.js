import React, { useState } from "react";
// Components
import SectionWrapper from "../../../common/layout/SectionWrapper";
import { Heading, Typography } from "../../../common/text";
import Testimonial from "./Testimonial";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Testimonials = ({ data }) => {
  const testimonials = data?.testimonials;
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = React.createRef();
  const slideOptions = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 200,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (i) => {
      const backgroundStyle =
        i === slideIndex ? "bg-[#F87216]" : "bg-slate-700";
      return (
        <div
          className={`mr-3 h-3 w-3 rounded-[50%] mt-4 cursor-pointer ${backgroundStyle}`}
        ></div>
      );
    }
  };

  const handleSlideChange = (index) => {
    setSlideIndex(index);
  };

  return (
    <SectionWrapper pb={215}>
      <Typography variant="preHeading" alignSmall="center">
        {data?.title || ""}
      </Typography>
      <Heading component="h3" alignSmall="center">
        {data?.heading || ""}
      </Heading>

      <div className="w-full mt-[46px] grid-cols-1 largeTablet:grid-cols-2 laptop:grid-cols-3 laptop:grid gap-9 largeTablet:mt-24 hidden largeTablet:grid ">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.twitterUsername}
            testimonial={testimonial}
          />
        ))}
      </div>
      <div className="w-full mt-[46px] largeTablet:mt-24 largeTablet:hidden ">
        <Slide
          ref={slideRef}
          {...slideOptions}
          onChange={(x, y) => handleSlideChange(y)}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.twitterUsername}
              style={{
                padding: "0px 5px",
                boxSizing: "border-box"
              }}
            >
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </Slide>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
