export const commonData = {
  navigationLinks: [
    { _type: "navigation", url: "/#features", label: "Features" },
    { _type: "navigation", url: "/pricing", label: "Pricing" },
    { _type: "navigation", url: "/about", label: "About" },
    { _type: "navigation", url: "/blog", label: "Blog" }
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

export const aboutPageData = {
  _type: "aboutPage",
  introduction: {
    _type: "introduction",
    heading: "intro heading",
    subheading: "intro sub-heading"
  },
  numeralHighlight: [
    {
      numericalValue: "420k",
      context: "followers"
    },
    {
      numericalValue: "5200k",
      context: "github stars"
    }
  ],
  socialLinks: [
    {
      socialLinkPlaceholder: "github",
      socialUrl: "github.com/sunny-unik",
      socialIcon: {
        _type: "image",
        asset: {
          _type: "sanity.imageAsset",
          assetId: "asset-id",
          extension: "asset extension",
          metadata: "SanityImageMetadata",
          mimeType: "asset mimeType",
          originalFilename: "github.svg",
          path: "/logos/github.svg",
          sha1hash: "nah",
          size: 45,
          uploadId: "none",
          url: "/logos/github.svg"
        },
        crop: "SanityImageCrop",
        hotspot: "SanityImageHotspot"
      }
    }
  ],
  services: [
    {
      serviceName: "sup service",
      serviceUrl: "github.com/service",
      serviceDescription: "this service do nothing"
    },
    {
      serviceName: "sup service second",
      serviceUrl: "github.com/service",
      serviceDescription: "this service also do nothing but its second"
    },
    {
      serviceName: "sup service third",
      serviceUrl: "github.com/service",
      serviceDescription:
        "this service do nothing and its third & longggggggggggggggggggggggggggggggggg"
    }
  ]
};
