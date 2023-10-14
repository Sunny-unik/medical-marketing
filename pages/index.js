import Prismic from "prismic-javascript";
import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import Hero from "@/components/sections/home-page/Hero";
// import Logos from "@/components/sections/home-page/Logos";
import Newsletter from "@/components/sections/home-page/Newsletter";
import Features from "@/components/sections/home-page/features/Features";
// import Testimonials from "@/components/sections/home-page/testimonials/Testimonials";
import PrismicClient from "@/services/prismic";
import { commonData } from "@/services/dummyData";

export default function Home({ landingPageData, commonData }) {
  console.log(landingPageData);

  const heroData = landingPageData[0].data.body.filter(
    (x) => x.slice_type == "hero_landing"
  )[0];
  const featuresData = landingPageData[0].data.body.filter((x) =>
    ["content_with_image", "call_to_action"].includes(x.slice_type)
  );

  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
    >
      <Hero data={heroData} />
      {/* <Logos data={homePageData.hero.users} /> */}
      <Features data={featuresData} />
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
    props: { landingPageData: landingPageData.results, commonData }
  };
}
