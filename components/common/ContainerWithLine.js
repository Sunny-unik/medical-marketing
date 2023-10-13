import React from "react";

const ContainerWithLine = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="relative w-[1.5px] mx-1 largeTablet:mx-6">
        <div className="absolute inset-0 bg-[#A428BC] blur-sm "></div>
        <div className="bg-[#A428BC] h-full relative"></div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default ContainerWithLine;
