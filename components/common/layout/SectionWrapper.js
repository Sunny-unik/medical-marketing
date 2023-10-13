import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const SectionWrapper = ({
  justify = "center",
  direction = "col",
  pt = 0,
  pb = 0,
  pts = 0,
  pbs = 120,
  px = 6,
  children
}) => {
  const isLargeTablet = useMediaQuery();
  return (
    <div
      style={{
        paddingBottom: isLargeTablet ? `${pb}px` : `${pbs}px`,
        paddingTop: isLargeTablet ? `${pt}px` : `${pts}px`
      }}
      className={`w-full max-w-[1256px] mx-auto px-${px} flex justify-${justify} flex-${direction} items-center`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
