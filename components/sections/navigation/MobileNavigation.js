import React from "react";
import Image from "next/image";
import Link from "next/link";

import DropdownMenu from "./DropdownMenu";

const MobileNavigation = ({ navigationItems, logo }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="h-[26px] w-[150px] largeTablet:hidden  cursor-pointer">
        <Link href="/" passHref>
          <Image src={logo} alt="Open Sauced" />
        </Link>
      </div>

      <DropdownMenu
        menuItems={navigationItems.map((navItem) => ({
          label: navItem.label,
          href: navItem.url
        }))}
        label="Navigation"
      />
    </div>
  );
};

export default MobileNavigation;
