import Prismic from "prismic-javascript";

const repositoryName = process.env.PRISMIC_REPOSITORY_NAME;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;
const apiEndpoint = `https://${repositoryName}.cdn.prismic.io/api/v2`;

const getPrismicClient = () =>
  Prismic.client(apiEndpoint, accessToken ? { accessToken } : {});

export default getPrismicClient;
