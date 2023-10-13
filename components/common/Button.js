import Link from "next/link";
import React from "react";

// Icons
import { AiFillGithub } from "react-icons/ai";

const Button = ({
  contactNumber,
  children,
  href = "#",
  borderVariant = "neon",
  backgroundVariant = "dark",
  fullWidth,
  gitHub
}) => {
  const commonStyle = `h-fit min-h-[38px] min-w-[180px] rounded-md p-[1px] cursor-pointer`;
  const widthStyle = fullWidth ? `w-full largeTablet:w-fit` : `w-fit`;
  const borderVariantStyle =
    borderVariant === "neon"
      ? `bg-gradient-to-br from-[#A428BC] via-[#FFF8C9] to-[#A428BC] drop-shadow-[0_0_4px_#ED5432] hover:via-[#FFF8C9] hover:to-[#ED5432] [&_div]:hover:bg-[#610C9F]`
      : `bg-[#687076] hover:bg-[#ECE5E5] [&_div]:hover:bg-[#ECE5E5] [&_span]:hover:text-[#11181C]`;
  const backgroundVariantStyle =
    backgroundVariant === "orange" || gitHub ? "bg-[#211E1C]" : "bg-darkBG";

  return (
    <>
      {contactNumber ? (
        <div
          className={`${commonStyle} ${widthStyle} ${borderVariantStyle} transition-all ease-in-out duration-400`}
        >
          <a href={contactNumber}>
            <div
              className={`h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] ${backgroundVariantStyle} transition-all ease-in-out duration-400`}
            >
              <span className="font-bold text-sm leading-[1] text-[#FEF8F4] flex transition-all ease-in-out duration-400">
                Call Us
              </span>
            </div>
          </a>
        </div>
      ) : (
        <Link href={href} passHref>
          <div
            className={`${commonStyle} ${widthStyle} ${borderVariantStyle} transition-all ease-in-out duration-400`}
          >
            <div
              className={`h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] ${backgroundVariantStyle} transition-all ease-in-out duration-400`}
            >
              <span className="font-bold text-sm leading-[1] text-[#FEF8F4] flex transition-all ease-in-out duration-400">
                {gitHub && (
                  <span className="mr-2">
                    <AiFillGithub />
                  </span>
                )}
                {children}
              </span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Button;
