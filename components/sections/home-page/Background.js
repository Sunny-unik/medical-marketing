import React from "react";
import Image from "next/image";

// Static assets
import upperStroke from "../../../public/background-strokes/MM flecha lado5.png";
import upperStrokeInv from "../../../public/background-strokes/MM completo lado1.png";
import left_2_stroke from "../../../public/background-strokes/MM completo lado2.png";
import right_2_stroke from "../../../public/background-strokes/MM flecha lado2.png";
import right_3_stroke from "../../../public/background-strokes/MM completo lado3.png";

const Background = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
      <div className="absolute hidden largeTablet:block largeTablet:top-[-40rem] largeTablet:left-[-23rem] desktop:-left-[0rem]">
        <Image
          alt="Doodles"
          width={500}
          style={{ marginTop: 550 }}
          src={upperStroke}
        />
      </div>

      <div className="absolute top-[30rem] right-[-15rem] tablet:-right-[8rem] largeTablet:top-[6rem] largeTablet:laptop:-right-[6rem] laptop:-right-[4rem] desktop:-right-[3rem]">
        <Image alt="Doodles" width={500} src={upperStrokeInv} />
      </div>

      <div className="absolute hidden largeTablet:block top-[95rem] -left-[5rem]">
        <Image alt="Doodles" style={{ marginLeft: 50 }} width={500} src={left_2_stroke} />
      </div>

      <div className="absolute hidden largeTablet:block top-[125rem] right-[4rem]">
        <Image alt="Doodles" width={500} src={right_2_stroke} />
      </div>

      <div className="absolute top-[190rem] -right-[35rem] largeTablet:-right-[4rem]">
        <Image alt="Doodles" width={500} src={right_3_stroke} />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};

export default Background;
