import React from "react";
import Link from "next/link";

// Components
import SectionWrapper from "../common/layout/SectionWrapper";
import SocialLinks from "../common/SocialLinks";

const footerContext = {
  pages: [
    {
      url: "https://app.termly.io/document/privacy-policy/5e303854-d262-468a-80ec-54b645d01c2e",
      label: "Privacy"
    },
    {
      url: "https://app.termly.io/document/terms-of-use-for-saas/03e4e1c1-53ad-4fc4-b415-5c3f0e8c25ef",
      label: "Terms"
    }
  ],
  apps: [
    {
      url: "https://gist.github.com/sunny-unik",
      label: "gist.github.com/sunny-unik"
    },
    {
      url: "https://github.com/sunny-unik",
      label: "github.com/sunny-unik"
    },
    {
      url: "https://github.com",
      label: "github.com"
    },
    {
      url: "https://instagram.com",
      label: "instagram.com"
    }
  ]
};

const Footer = ({ pressPage, navigationItems }) => {
  const { pages, apps } = footerContext;
  const bgColor = pressPage ? "bg-[#221e1c]" : "bg-footerBG";
  return (
    <footer className={`w-full min-h-[200px] ${bgColor} pb-10`}>
      <SectionWrapper pbs={0}>
        <div className="w-full pt-10 pb-16 largeTablet:pt-12">
          <div className="w-[140px] h-6 relative">
            <img
              alt="Brand logo"
              src="/medicosLogo/medicos-logo-trans-wt.png"
            />
          </div>
        </div>
        <div className="w-full flex flex-col largeTablet:flex-row">
          <div className="w-full largeTablet:w-[45%]">
            <LocalTypography variant="title">SOCIALS</LocalTypography>
            <SocialLinks />
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-[35%] sm:w-1/2 my-10 largeTablet:w-[35%] largeTablet:my-0">
              <LocalTypography variant="title">MENU</LocalTypography>
              <div className="w-full flex flex-col">
                {navigationItems.map(({ url, label }) => (
                  <div key={label} className="cursor-pointer">
                    <Link href={url || "/#"} passHref>
                      <LocalTypography variant="item1">{label}</LocalTypography>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 my-10 largeTablet:w-[35%] largeTablet:my-0">
              <LocalTypography variant="title">More Sauce</LocalTypography>
              <div className="w-full flex flex-col">
                {apps.map(({ label, url }) => (
                  <a key={url} href={url} target="_blank" rel="noreferrer">
                    <LocalTypography variant="item1">{label}</LocalTypography>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-1/2 mb-10 largeTablet:w-[30%] largeTablet:mb-0">
              <LocalTypography variant="title">Contact Us</LocalTypography>
              <div className="w-full flex flex-col">
                {/* <LocalTypography variant="item1">
                  +1 (123) 456-7890
                </LocalTypography> */}
                <LocalTypography variant="item1">
                  <a href="mailto:sunnygandhwani027@gmail.com">
                    sunnygandhwani027@gmail.com
                  </a>
                </LocalTypography>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-9 mt-7 flex flex-col-reverse border-t-[0.5px] border-gray-700 largeTablet:flex-row largeTablet:mt-12">
          <div className="flex-grow">
            <LocalTypography variant="item2">{`© ${new Date().getFullYear()} Medical Marketing, INC. All rights reserved.`}</LocalTypography>
          </div>
          <div className="flex mb-5 largeTablet:mb-0 ">
            {pages.map(({ url, label }, i) => (
              <div key={label} className="flex">
                <a href={url} target="_blank" rel="noreferrer">
                  <LocalTypography variant="item2">{label}</LocalTypography>
                </a>
                {i < pages.length - 1 && (
                  <div className=" mx-2">
                    <LocalTypography variant="item2">•</LocalTypography>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
};

const LocalTypography = ({ variant = "item1", children }) => {
  const titleStyle =
    "font-bold text-textPrimary opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8";
  const item1Style =
    "font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3";
  const item2Style =
    "font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.35]";

  const appliedStyle =
    variant === "title"
      ? titleStyle
      : variant === "item1"
      ? item1Style
      : item2Style;
  return <p className={appliedStyle}>{children}</p>;
};

export default Footer;
