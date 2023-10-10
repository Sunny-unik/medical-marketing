import { getPrismicData } from "@/services/prismic";
import Background from "../components/sections/home-page/Background";
import PageLayout from "../components/common/layout/PageLayout";

export default function Home({ prismicData }) {
  console.log(prismicData);
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

  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
      homePage
    ></PageLayout>
  );
}

export async function getServerSideProps() {
  const prismicData = await getPrismicData();

  return { props: { prismicData } };
}
