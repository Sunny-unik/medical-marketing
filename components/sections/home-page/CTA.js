import React from "react";

// Components
import SectionWrapper from "../../common/layout/SectionWrapper";
import { Typography } from "../../common/text";
import Button from "../../common/Button";
import { RichText } from "prismic-reactjs";

const CTA = ({
  data: {
    after_cta,
    main_text,
    secondary_text,
    below_text,
    destination_link_of_cta
  },
  pb,
  pbs
}) => {
  return (
    <SectionWrapper pb={pb ? pb : 150} pbs={pbs ? pbs : 105}>
      {after_cta[0]?.text && (
        <Typography alignSmall="center" variant="preHeading">
          {RichText.render(after_cta)}
        </Typography>
      )}
      <div className="w-full items-center flex flex-col">
        <Button href={destination_link_of_cta.url}>
          <div className="flex flex-col">
            <Typography alignSmall="center" variant="subHeading">
              {RichText.render(main_text)}
            </Typography>
            {secondary_text[0]?.text && (
              <Typography alignSmall="center" variant="body4">
                {RichText.render(secondary_text)}
              </Typography>
            )}
          </div>
        </Button>
      </div>
      {below_text[0]?.text && (
        <div className="w-full largeTablet:w-2/3 pt-4 pb-16 largeTablet:pt-10 largeTablet:pb-20 ">
          <Typography alignSmall="center" variant="subheading">
            {RichText.render(below_text)}
          </Typography>
        </div>
      )}
    </SectionWrapper>
  );
};

export default CTA;
