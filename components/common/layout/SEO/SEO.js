import Head from "next/head";
import React from "react";

const SeoBlock = ({
  ogTitle,
  ogDescription,
  ogImageUrl,
  ogUrl,
  noindex,
  linkHref
}) => {
  return (
    <Head>
      <title>{ogTitle || "Open Sauced"}</title>
      <meta name="title" content={ogTitle || "Open Sauced"}></meta>
      <meta
        name="description"
        content={
          ogDescription ||
          "The open-source intelligence platform for contributors and maintainers."
        }
      />
      <link rel="icon" href="/favicon.svg" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || "https://opensauced.pizza"} />
      <meta property="og:title" content={ogTitle || "Open Sauced"} />
      <meta
        property="og:description"
        content={
          ogDescription ||
          "The open-source intelligence platform for contributors and maintainers."
        }
      />
      <meta property="og:image" content={ogImageUrl || ""} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={ogUrl || "https://opensauced.pizza/"}
      />
      <meta property="twitter:title" content={ogTitle || "Open Sauced"} />
      <meta
        property="twitter:description"
        content={
          ogDescription ||
          "The open-source intelligence platform for contributors and maintainers."
        }
      />
      <meta property="twitter:image" content={ogImageUrl || ""}></meta>
      {noindex && <meta name="robots" content="noindex" key="noindex" />}

      {/* for links */}
      <link
        href={
          linkHref ||
          "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
        }
        rel="stylesheet"
      />
    </Head>
  );
};

export default SeoBlock;
