import React from "react";

// Components
import Feature from "./Feature";
import SectionWrapper from "../../../common/layout/SectionWrapper";
import EndingLine from "../../../common/EndingLine";

const className = [
  {
    lg: "-left-[22px] px-[100px] scale-[1.30] ",
    sm: "scale-[1.3] right-0 "
  },
  {
    lg: "largeTablet:-top-[270px] largeTablet:px-5 largeTablet:-right-[90px] largeTablet:!absolute ",
    sm: ""
  },
  {
    lg: "largeTablet:-right-[100px] -right-[8px] largeTablet:px-24 ",
    sm: ""
  }
];

const Features = ({ data }) => {
  return (
    <SectionWrapper pbs={0}>
      {data?.map((feature, i) => (
        <Feature
          key={feature._key}
          feature={feature}
          index={i}
          className={className[i]}
        />
      ))}

      <EndingLine />
    </SectionWrapper>
  );
};

export default Features;
