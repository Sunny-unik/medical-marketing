import PageLayout from "@/components/common/layout/PageLayout";
import Background from "@/components/sections/blog/Background";
import Blogs from "@/components/sections/blog/Blogs";
import { commonData } from "../../services/dummyData";
import PrismicClient from "@/services/prismic";
import Prismic from "prismic-javascript";
import { validPaginationParams } from "@/utils/validQueryParams";

const BlogsPage = ({ commonData, blogs, totalPageCount }) => {
  console.log("blogs:", blogs, "\n\ntotalPageCount:", totalPageCount);

  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
    >
      {/* <Blogs data={blogs} /> */}
    </PageLayout>
  );
};

export default BlogsPage;

export async function getServerSideProps(serverRes) {
  const { page_number, blog_count } = serverRes.query;
  const pageSize = validPaginationParams(blog_count, 20)
    ? parseInt(blog_count)
    : 15;

  const singleResponse = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "page"),
    { pageSize }
  );
  const totalPageCount = singleResponse.total_pages;

  const options = {
    pageSize,
    page: validPaginationParams(page_number, totalPageCount)
      ? parseInt(page_number)
      : 1
  };
  const blogs = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "page"),
    options
  );

  return { props: { commonData, totalPageCount, blogs: blogs.results } };
}
