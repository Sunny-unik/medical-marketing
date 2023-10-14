import React from "react";

// Components
import SectionWrapper from "../../common/layout/SectionWrapper";
import { Typography } from "../../common/text";
import Button from "../../common/Button";

const CTA = ({ data }) => {
  return (
    <SectionWrapper pb={150} pbs={105}>
      <Typography variant="preHeading">{data?.after_cta[0]?.text}</Typography>
      <div className="w-full items-center flex flex-col">
        <Button href={data?.destination_link_of_cta.url}>
          <div className="flex flex-col">
            <Typography variant="subHeading">
              {data?.main_text[0]?.text}
            </Typography>
            <Typography variant="body4">
              {data?.secondary_text[0]?.text}
            </Typography>
          </div>
        </Button>
      </div>
      <div className="w-full largeTablet:w-2/3 pt-4 pb-16 largeTablet:pt-10 largeTablet:pb-20 ">
        <Typography variant="subheading">{data.below_text[0]?.text}</Typography>
      </div>
      {/* <Heading component="h2" alignSmall="center">
        {data?.heading}
      </Heading>
      <div className="my-10 w-full largeTablet:w-[55%]">
        <Typography variant="subheading" alignSmall="center">
          {data?.description}
        </Typography>
      <Button href={data?.ctaLink}>Get Started</Button>
      </div> */}
    </SectionWrapper>
  );
};

export default CTA;
