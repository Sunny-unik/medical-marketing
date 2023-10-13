import React from "react";

// Components
import SectionWrapper from "../../common/layout/SectionWrapper";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Header = ({ navigationItems }) => {
  return (
    <SectionWrapper direction="row" pbs={0}>
      <header className="flex flex-col largeTablet:flex-row flex-grow py-9 font-inter justify-between items-center">
        <DesktopNavigation
          logo={"/medicosLogo/medicos-logo-trans-wt.png"}
          navigationItems={navigationItems}
        />
        <div className="flex largeTablet:w-auto w-full">
          {/* // w-full largeTablet:hidden */}
          <MobileNavigation
            logo={"/medicosLogo/medicos-logo-trans-wt.png"}
            navigationItems={navigationItems}
          />
        </div>
      </header>
    </SectionWrapper>
  );
};

export default Header;
