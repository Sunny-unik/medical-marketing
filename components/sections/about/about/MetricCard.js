import React from "react";

// Components
import { Typography } from "../../../common/text";
import DecoratedText from "../../../common/text/utils/DecoratedText";

const MetricCard = ({ data }) => {
  const content = `$orange-to-red${data?.numericalValue}$orange-to-red`;

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <p className="font-bold text-2xl largeTablet:text-3xl">
        <DecoratedText content={content} />
      </p>
      <div className="pt-4">
        <Typography variant="preHeading">{data?.context}</Typography>
      </div>
    </div>
  );
};

export default MetricCard;
