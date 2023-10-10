import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/home-page/Background";
import Hero from "@/components/sections/home-page/Hero";
import Logos from "@/components/sections/home-page/Logos";
import Newsletter from "@/components/sections/home-page/Newsletter";
import Features from "@/components/sections/home-page/features/Features";
import Testimonials from "@/components/sections/home-page/testimonials/Testimonials";
import { getPrismicData } from "@/services/prismic";

export default function Home({ prismicData, commonData, homePageData }) {
  console.log(prismicData);

  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
    >
      <Hero data={homePageData.hero} />
      <Logos data={homePageData.hero.users} />
      <Features data={homePageData.features} />
      <Testimonials data={homePageData.testimonialsSection} />
      <Newsletter />
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const prismicData = await getPrismicData();
  const commonData = {
    navigationLinks: [
      {
        _type: "navigation",
        label: "blog",
        url: "/blog"
      },
      {
        _type: "navigation",
        label: "blog1",
        url: "/blog1"
      },
      {
        _type: "navigation",
        label: "blog2",
        url: "/blog2"
      }
    ],
    seoData: {
      _type: "seo",
      title: "string",
      description: "string",
      url: "/",
      image: {
        _type: "/vercel.svg",
        asset: "",
        crop: "",
        hotspot: ""
      }
    },
    footer: [
      {
        type: "seo",
        title: "string",
        description: "string",
        url: "/",
        image: {
          type: "/vercel.svg",
          asset: "",
          crop: "",
          hotspot: ""
        }
      },
      {
        type: "seo2",
        title: "string",
        description: "string",
        url: "/",
        image: {
          type: "/vercel.svg",
          asset: "",
          crop: "",
          hotspot: ""
        }
      }
    ]
  };
  const demoHomeData = {
    _type: "homePage",
    hero: {
      _type: "hero",
      title: "hero title",
      heading: "hero heading",
      description: "hero description",
      cta: [
        {
          ctaLabel: "ctaLabel string",
          ctaLink: "ctaLink string"
        }
      ],
      image: {
        _type: "image",
        asset: "/next.svg",
        crop: "SanityImageCrop",
        hotspot: "SanityImageHotspot"
      },
      users: [
        {
          _type: "user",
          name: "string",
          website: "/url",
          logo: {
            _type: "image",
            asset: "/next.svg",
            crop: "SanityImageCrop",
            hotspot: "SanityImageHotspot"
          }
        },
        {
          _type: "user",
          name: "user2",
          website: "/src",
          logo: {
            _type: "image",
            asset: "/next.svg",
            crop: "",
            hotspot: ""
          }
        }
      ]
    },
    moreHeading: "Array<SanityKeyed<string>>",
    topFeature: {
      _type: "topFeature",
      heading: "string",
      description: "string",
      image: {
        _type: "image",
        asset: "/next.svg",
        crop: "SanityImageCrop",
        hotspot: "SanityImageHotspot"
      }
    },
    ctaSection: {
      _type: "ctaSection",
      heading: "string",
      description: "string",
      ctaLabel: "string",
      ctaLink: "string"
    },
    features: [
      {
        _key: "1",
        title:
          "Find $orange-to-yellowhot repositories$orange-to-yellow to contribute to today",
        description:
          "Discovering projects is more than stars. Focus on PRs. Discover active projects and get recommendations based on the developers you follow.",
        icon: "/icons/find_icon.svg",
        image: "/features/hot_repo.svg",
        smallImage: "/features/hot_repo_sm.svg"
      },
      {
        _key: "2",
        title:
          "$orange-to-yellowShareable highlights$orange-to-yellow  you can promote",
        description:
          "Generate shareable insights using our unique and customizable widgets. Sometimes it's better to show than tell.",
        icon: "/icons/share_icon.svg",
        image: "/features/pr_highlights.svg",
        smallImage: ""
      },
      {
        _key: "3",
        title:
          "$orange-to-yellowConnect with companies$orange-to-yellow doing open source",
        description:
          "Whether you are looking for your next job or pull request, make it easier to be discoverable through collaborations.",
        icon: "/icons/connect_icon.svg",
        image: "/features/collaboration.svg",
        smallImage: ""
      }
    ],
    testimonialsSection: {
      _type: "testimonialsSection",
      title: "testinomial title",
      heading: "testinomial heading",
      testimonials: ["<SanityKeyedReference<SanityTestimonial>>"]
    },
    blogSection: {
      _type: "blogSection",
      title: "blog title",
      heading: "blog heading",
      description: "blog description"
    }
  };

  return { props: { prismicData, commonData, homePageData: demoHomeData } };
}
