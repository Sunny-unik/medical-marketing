import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

// Components
import DecoratedText from "./utils/DecoratedText";

const Heading = ({
  children,
  component = "h1",
  alignLarge = "center",
  alignSmall = "left"
}) => {
  const isLargeTablet = useMediaQuery();
  const commonStyle = `w-full font-bold text-textPrimary tracking-[-0.02em] text-3xl`;
  if (component === "h2") {
    return (
      <h2
        style={{
          textAlign: isLargeTablet ? alignLarge : alignSmall
        }}
        className={`${commonStyle}
        largeTablet:text-5xl`}
      >
        <DecoratedText content={children} />
      </h2>
    );
  }
  if (component === "h3") {
    return (
      <h3
        style={{
          textAlign: isLargeTablet ? alignLarge : alignSmall
        }}
        className={`${commonStyle} largeTablet:
        largeTablet:text-4xl`}
      >
        <DecoratedText content={children} />
      </h3>
    );
  }
  return (
    <h1
      style={{
        textAlign: isLargeTablet ? alignLarge : alignSmall
      }}
      className={`${commonStyle}
      largeTablet:text-6xl largeTablet:tracking-[-0.03em]`}
    >
      <DecoratedText content={children} />
    </h1>
  );
};

export default Heading;
