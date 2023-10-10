import React from "react";

// Components
import SectionWrapper from "../../common/layout/SectionWrapper";
import ContainerWithLine from "../../common/ContainerWithLine";
import { Typography } from "../../common/text";

const Logos = ({ data }) => {
  return (
    <SectionWrapper pbs={0}>
      <ContainerWithLine>
        <div className="px-6 pt-32 pb-4 largeTablet:pt-10 ">
          <Typography
            alignLarge="left"
            alignSmall="center"
            variant="preHeading"
          >
            TRUSTED BY
          </Typography>
        </div>
        <div className="w-full px-6 pb-40 grid grid-cols-3 gap-x-10 gap-y-8 justify-center items-center content-center largeTablet:mt-0 largeTablet:grid-cols-6">
          {data?.map((item) => {
            const href = item.website || "";
            const src = item.logo.asset || "";
            return (
              <a
                key={item.name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="relative h-[18px] largeTablet:h-6 mx-auto"
              >
                <img
                  className="h-full"
                  src={src}
                  alt={item.name}
                  loading="lazy"
                />
              </a>
            );
          })}
        </div>
      </ContainerWithLine>
    </SectionWrapper>
  );
};

export default Logos;
