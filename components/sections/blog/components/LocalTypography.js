import React from "react";

const LocalTypography = ({ variant = "content1", featured, children }) => {
  const titleStyle = `font-bold text-textPrimary text-2xl ${
    featured ? "largeTablet:text-4xl" : "largeTablet:text-2xl"
  }`;
  const content1Style = "font-normal opacity-70 text-textPrimary text-base";

  const appliedStyle = variant === "title" ? titleStyle : content1Style;

  return <p className={appliedStyle}>{children}</p>;
};

export default LocalTypography;
