import Image from "next/image";
import React from "react";

// Components
import GradientBorderWrapper from "../../common/GradientBorderWrapper";
import Blog from "./components/Post";

const FeaturedPost = ({ data }) => {
  const src = data.coverImage || "";
  return (
    <div>
      <div className="w-full largeTablet:grid largeTablet:grid-cols-2 largeTablet:gap-x-11">
        <div className="hidden largeTablet:flex">
          <GradientBorderWrapper style={{ width: "100%" }}>
            <div className="flex-1  h-[496px] relative rounded-[5px] overflow-hidden ">
              <Image
                src={src}
                layout="fill"
                objectFit="cover"
                alt="Post cover"
              />
            </div>
          </GradientBorderWrapper>
        </div>

        <div className="flex-1 overflow-hidden largeTablet:flex largeTablet:items-center largeTablet:pl-8">
          <Blog featured data={data} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
