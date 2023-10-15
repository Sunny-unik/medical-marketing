import React from "react";
import { Heading, Typography } from "../../../common/text";
import ContainerWithLine from "../../../common/ContainerWithLine";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RichText } from "prismic-reactjs";
import { adjustCurrentDate } from "@/utils/dateUtils";

const Feature = ({ feature, className }) => {
  const hide = feature.primary.small_image ? "hidden" : "";

  const [refIcon, iconInView] = useInView();
  const [refImage, imageInView] = useInView();

  // text animation
  const initPosY = 5;
  const posY = iconInView ? 0 : initPosY;

  const {
    primary: {
      small_image: { url: smallImageUrl, alt: smallImageAlt },
      title,
      does_it_have_date_
    }
  } = feature;
  const images = [];
  const text = feature.primary.text.filter((ele) => {
    if (ele.type === "image") images.push(ele);
    else return ele;
  });

  return (
    <ContainerWithLine>
      <div className="pb-2 largeTablet:mb-2">
        <div className="flex gap-y-24 py-10 flex-col-reverse largeTablet:flex-col">
          <div ref={refIcon} className=" flex flex-col px-6 gap-y-8">
            {does_it_have_date_ && adjustCurrentDate(-7).toDateString()}
            {(smallImageUrl || title[0]?.text) && (
              <div className="relative largeTablet:max-w-[500px]">
                {smallImageUrl && (
                  <motion.img
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{
                      opacity: iconInView ? 1 : 0,
                      scale: iconInView ? 1 : 0.5
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: "easeInOut"
                    }}
                    className="absolute -left-[56px] largeTablet:-left-[77px] -top-[8px] largeTablet:-top-[4px]"
                    src={smallImageUrl}
                    alt={smallImageAlt}
                  />
                )}
                {title[0]?.text && (
                  <motion.div
                    initial={{ opacity: 0, y: initPosY, x: -10 }}
                    animate={{
                      opacity: iconInView ? 1 : 0,
                      y: posY,
                      x: iconInView ? 0 : -10
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <Heading component="featured" alignLarge="left">
                      {RichText.render(title)}
                    </Heading>
                  </motion.div>
                )}
              </div>
            )}

            <div className="largeTablet:max-w-[500px]">
              <motion.div
                initial={{ opacity: 0, y: initPosY, x: 10 }}
                animate={{
                  opacity: iconInView ? 1 : 0,
                  y: posY,
                  x: iconInView ? 0 : 10
                }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
              >
                <Typography variant="body1" isFeatured={true} alignLarge="left">
                  {RichText.render(text)}
                </Typography>
              </motion.div>
            </div>
          </div>

          <motion.div
            ref={refImage}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -10 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            {!!images.length && (
              <div
                className={`relative largeTablet:flex justify-center largeTablet:min-h-[350px] ${hide}`}
              >
                <img
                  className={`relative ${className.lg}`}
                  src={images[0].url}
                  alt={images[0].alt}
                />
              </div>
            )}

            {!!images.length && (
              <div className="relative flex largeTablet:hidden justify-center largeTablet:min-h-[350px]">
                <img
                  className={`relative ${className.sm}`}
                  src={images[0].url}
                  alt={images[0].alt}
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </ContainerWithLine>
  );
};

export default Feature;
