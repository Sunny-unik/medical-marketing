import React from "react";
import Image from "next/image";
// Static assets
import InstagramLogoW from "../../public/logos/instagramLogoW.svg";
import xLogoW from "../../public/logos/xLogoW.svg";
import GithubLogoW from "../../public/logos/githubLogoW.svg";
import DiscordLogoW from "../../public/logos/discordLogoW.svg";
import DevLogoW from "../../public/logos/devLogoW.svg";
import YoutubeLogoW from "../../public/logos/youtubeLogoW.svg";

const data = [
  {
    url: "https://twitter.com/",
    icon: xLogoW,
    label: "X"
  },
  {
    url: "https://github.com",
    icon: GithubLogoW,
    label: "Github"
  },
  {
    url: "https://instagram.com/",
    icon: InstagramLogoW,
    label: "Instagram"
  },
  {
    url: "https://youtube.com/",
    icon: YoutubeLogoW,
    label: "Youtube"
  },
  {
    url: "https://discord.com/",
    icon: DiscordLogoW,
    label: "Discord"
  },
  {
    url: "https://dev.to/",
    icon: DevLogoW,
    label: "Dev"
  }
];

const SocialLinks = ({ aboutPage, social }) => {
  const wrapperStyle = aboutPage
    ? "grid grid-cols-3 gap-x-8 gap-y-3 largeTablet:flex"
    : "flex flex-wrap relative gap-x-3 pr-2";

  return social ? (
    <div className={wrapperStyle}>
      {social.map(({ socialUrl, socialIcon, socialLinkPlaceholder }) => (
        <div
          key={socialLinkPlaceholder}
          className="flex items-center cursor-pointer"
        >
          <a
            href={socialUrl}
            target="_blank"
            rel="noreferrer"
            className="opacity-70"
          >
            <Image
              width={37}
              height={37}
              alt={socialLinkPlaceholder}
              src={socialIcon?.asset?.url || socialIcon || ""}
            />
          </a>
        </div>
      ))}
    </div>
  ) : (
    <div className={wrapperStyle}>
      {data.map(({ url, icon, label }) => (
        <div key={label} className="flex items-center cursor-pointer">
          <a href={url} target="_blank" rel="noreferrer" className="opacity-70">
            <Image width={18} height={18} alt={label} src={icon} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
