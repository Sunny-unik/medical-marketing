import Prismic from "prismic-javascript";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import Hero from "@/components/sections/home-page/Hero";
// import Logos from "@/components/sections/home-page/Logos";
import Newsletter from "@/components/sections/home-page/Newsletter";
import Features from "@/components/sections/home-page/features/Features";
// import Testimonials from "@/components/sections/home-page/testimonials/Testimonials";
import PrismicClient from "@/services/prismic";
import { commonData, homePageData } from "@/services/dummyData";

export default function Home({ landingPageData, commonData, homePageData }) {
  console.log(landingPageData);

  const heroData = landingPageData[0].data.body.filter(
    (x) => x.slice_type == "hero_landing"
  )[0];
  const ctaData = landingPageData[0].data.body.filter(
    (x) => x.slice_type == "call_to_action"
  );
  console.log("heroData", heroData);

  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
    >
      <Hero data={heroData} />
      {/* <Logos data={homePageData.hero.users} /> */}
      <Features data={homePageData.features} ctaData={ctaData} />
      {/* <Testimonials data={homePageData.testimonialsSection} /> */}
      <Newsletter />
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const landingPageData = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "landing_page")
  );

  return {
    props: {
      landingPageData: landingPageData.results,
      commonData,
      homePageData
    }
  };
}
