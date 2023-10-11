import React from "react";

// Components
import SectionWrapper from "../../../common/layout/SectionWrapper";
import { Heading, Typography } from "../../../common/text";
import MetricCard from "./MetricCard";
import { getPartialString, getPartialStringFromEnd } from "@/utils/stringUtils";

const About = ({ intro, numeralHighlight }) => {
  return (
    <SectionWrapper pt={205} pts={60} pb={80} pbs={90}>
      <Typography variant="preHeading">About</Typography>
      <div className="w-full largeTablet:w-2/3 ">
        <Heading>
          {` $yellow-to-orange ${getPartialString(
            intro?.heading,
            0.6
          )} $yellow-to-orange ${getPartialStringFromEnd(intro?.heading, 0.4)}`}
        </Heading>
      </div>
      <div className="w-full largeTablet:w-2/3 pt-4 pb-16 largeTablet:pt-10 largeTablet:pb-20 ">
        <Typography variant="subheading">{intro?.subheading}</Typography>
      </div>
      <div className="w-full grid grid-cols-2 gap-y-9 largeTablet:grid-cols-4 largeTablet:gap-y-0 ">
        {numeralHighlight &&
          numeralHighlight.map((item, i) => (
            <MetricCard key={i} data={item} index={i} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
