import Prismic from "prismic-javascript";

const repositoryName = process.env.PRISMIC_REPOSITORY_NAME;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;
const apiEndpoint = `https://${repositoryName}.cdn.prismic.io/api/v2`;

export const getPrismicData = async () => {
  const client = Prismic.client(apiEndpoint, { accessToken });
  const response = await client.query(
    Prismic.Predicates.any("document.type", ["page", "type", "image"])
  );

  return response.results;
};
