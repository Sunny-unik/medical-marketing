import React from "react";

// Components
import Header from "../../sections/navigation/Header";
import Footer from "../../sections/Footer";
import Subscribe from "../../sections/Subscribe";
import SeoBlock from "./SEO/SEO";

const PageLayout = ({
  children,
  seoData,
  navigationURLs,
  BackgroundWrapper,
  pressPage,
  blogPage = false,
  homePage = false
}) => {
  return (
    <div>
      {!blogPage && (
        <SeoBlock
          ogTitle={seoData.title || "Open Sauced"}
          ogDescription={seoData.description || ""}
          ogImageUrl={seoData.image || ""}
          ogUrl={seoData.url || "https://opensauced.pizza"}
          noindex={false}
        />
      )}
      <BackgroundWrapper>
        {!pressPage && <Header navigationItems={navigationURLs} />}
        <div>{children}</div>
        <Footer pressPage={pressPage} navigationItems={navigationURLs} />
      </BackgroundWrapper>
    </div>
  );
};

export default PageLayout;
