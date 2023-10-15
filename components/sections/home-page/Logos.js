import React from "react";

// Components
import SectionWrapper from "../../common/layout/SectionWrapper";
import ContainerWithLine from "../../common/ContainerWithLine";
import { Typography } from "../../common/text";

const Logos = ({ data }) => {
  console.log("logos", data);

  return (
    <SectionWrapper pbs={0}>
      <ContainerWithLine>
        {!!data?.logoText && (
          <div className="px-6 pt-32 pb-4 largeTablet:pt-10 ">
            <Typography
              alignLarge="left"
              alignSmall="center"
              variant="preHeading"
            >
              {data.logoText}
            </Typography>
          </div>
        )}
        {!!data?.url && (
          <div className="w-full px-0 pb-20 ">
            {
              // "px-6 pb-40 grid grid-cols-3 gap-x-10 gap-y-8 justify-center items-center content-center largeTablet:mt-0 largeTablet:grid-cols-6"
            }
            {/* {data?.map((item) => { */}
            {/* const href = item.website || ""; const src = item.logo.asset || ""; */}
            {/* return ( */}
            <span
              // key={item.name}
              // href={href}
              // target="_blank"
              // rel="noreferrer"
              className="relative h-[18px] largeTablet:h-6 mx-auto"
            >
              <img
                className="h-full"
                src={data.url}
                alt={data.alt}
                loading="lazy"
              />
            </span>
            {/* ); */}
            {/* })} */}
          </div>
        )}
      </ContainerWithLine>
    </SectionWrapper>
  );
};

export default Logos;
