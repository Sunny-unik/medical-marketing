import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Button from "../../common/Button";

const DesktopNavigation = ({ navigationItems, logo }) => {
  const { pathname } = useRouter();
  const defaultStyle = "font-bold text-textPrimary text-sm";
  const activeLinkStyle =
    "after:absolute after:bg-gradient-to-r from-[#ED5432] to-[#EDA232] after:w-full after:h-[3px] after:bottom-[-8px] after:left-0";

  const getProperStyle = (link) => {
    if (pathname.includes(link)) {
      return `${defaultStyle} ${activeLinkStyle}`;
    }
    return defaultStyle;
  };
  return (
    <div className="items-center w-full justify-between hidden largeTablet:flex">
      <div className="h-[26px] w-[150px] cursor-pointer">
        <Link href="/" passHref>
          <Image src={logo} alt="Open Sauced" />
        </Link>
      </div>

      <nav className="flex gap-8">
        {navigationItems.map((link) => (
          <div key={link.label} className="relative cursor-pointer top">
            <Link key={link.label} href={link.url} passHref>
              <p className={`${getProperStyle(link.url)}`}>{link.label}</p>
            </Link>
          </div>
        ))}
      </nav>

      <Button href="https://insights.opensauced.pizza/start" gitHub>
        Connect with GitHub
      </Button>
    </div>
  );
};

export default DesktopNavigation;
