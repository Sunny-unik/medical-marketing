import React from "react";

// Components
import SectionWrapper from "../../common/layout/SectionWrapper";
import ContainerWithLine from "../../common/ContainerWithLine";
import { Heading, Typography } from "../../common/text";
import Logos from "./Logos";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
// import Button from "../../common/Button";
// import DecoratedText from "../../common/text/utils/DecoratedText";
// import Image from "next/image";

const Hero = ({ data }) => {
  console.log("hero data", data);
  const {
    primary: {
      featured_in,
      featured_in_image,
      h1,
      left_side_icon,
      header,
      sub_header,
      video_light_weight,
      long_version_of_video
    }
  } = data;

  return (
    <>
      <SectionWrapper pt={115} pts={60} pbs={0}>
        <ContainerWithLine>
          <main id={data.id}>
            <div className="flex largeTablet:items-center h-full flex-col gap-x-6 gap-y-10 largeTablet:flex-row mx-6">
              <div className="flex-1 ">
                <Typography
                  alignSmall="left"
                  alignLarge="left"
                  variant="preHeading"
                  isFeatured
                >
                  {RichText.render(h1)}
                </Typography>

                <div className="relative">
                  <Image
                    className="absolute -left-[49px] -top-[62px] largeTablet:-left-[68px] largeTablet:-top-[50px]"
                    src={left_side_icon.url}
                    alt={left_side_icon.alt}
                    width={left_side_icon.dimensions.width}
                    height={left_side_icon.dimensions.height}
                  />
                  <Heading
                    component="featured"
                    alignSmall="left"
                    alignLarge="left"
                  >
                    {RichText.render(header)}
                  </Heading>
                </div>

                <div className="py-10">
                  <Typography
                    alignLarge="left"
                    alignSmall="left"
                    variant="body3"
                    isFeatured
                  >
                    {RichText.render(sub_header)}
                  </Typography>
                </div>

                {/* <div className="flex gap-4 flex-col largeTablet:flex-row">
                {data?.cta?.map((item, i) => (
                  <Button
                    key={i}
                    href={item.ctaLink}
                    borderVariant={i !== 0 ? "gray" : "neon"}
                  >
                    {item.ctaLabel}
                  </Button>
                ))}
              </div> */}

                {/* <div className="pt-6 pb-10">
                <Typography alignLarge="left" alignSmall="left" variant="body3">
                  Maintaining a team?
                  <span>
                    <Link href="/teams">
                      <DecoratedText content="$orange-to-yellow Click here$orange-to-yellow" />
                    </Link>
                  </span>
                </Typography>
              </div> */}
              </div>

              <div className="flex-1">
                <div>
                  <a href={long_version_of_video?.embed_url} target="_blank">
                    <img
                      loading="eager"
                      className="relative  scl -right-4"
                      // scale-125 largeTablet:scale-125
                      src={video_light_weight.url}
                      alt="Insight Dashboard"
                      style={{
                        cursor: "pointer",
                        maxHeight: 250,
                        objectFit: "cover",
                        width: "100%"
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </ContainerWithLine>
      </SectionWrapper>
      <Logos
        data={{
          logoText: featured_in[0]?.text,
          ...featured_in_image
        }}
      />
    </>
  );
};

export default Hero;
