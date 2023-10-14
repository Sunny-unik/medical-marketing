import Head from "next/head";
import React from "react";

const SeoBlock = ({ seo_title, seo_description, seo_icon, seo_url }) => {
  return (
    <Head>
      <title>{seo_title?.text || "Medical Marketing"}</title>
      <meta
        name="title"
        content={seo_title?.text || "Medical Marketing"}
      ></meta>
      <meta
        name="description"
        content={
          seo_description?.text ||
          "La Agencia de Marketing Médico Que Garantiza Pacientes y Resultados【Te lo explicamos ▷ Entra Aquí】⭐ [Médicos•Clínicas•Hospitales]"
        }
      />
      <link rel="icon" href={seo_icon || "./favicon.ico"} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={seo_url || "https://medicalmarketing.es/"}
      />
      <meta
        property="og:title"
        content={seo_title?.text || "Medical-Marketing"}
      />
      <meta
        property="og:description"
        content={
          seo_description?.text ||
          "La Agencia de Marketing Médico Que Garantiza Pacientes y Resultados【Te lo explicamos ▷ Entra Aquí】⭐ [Médicos•Clínicas•Hospitales]"
        }
      />
      <meta property="og:image" content={seo_icon || "./favicon.ico"} />
    </Head>
  );
};

export default SeoBlock;
