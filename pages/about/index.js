import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/about/Background";
import FollowUs from "@/components/sections/about/FollowUs";
import Links from "@/components/sections/about/Links";
import About from "@/components/sections/about/about/About";
import { commonData, aboutPageData } from "@/services/dummyData";

const AboutPage = ({ commonData, aboutPageData }) => {
  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
    >
      <About
        intro={aboutPageData.introduction}
        numeralHighlight={aboutPageData.numeralHighlight}
      />
      <FollowUs social={aboutPageData.socialLinks} />
      <Links services={aboutPageData.services} />
    </PageLayout>
  );
};

export default AboutPage;

export async function getStaticProps() {
  return {
    props: { commonData, aboutPageData },
    revalidate: 30
  };
}
