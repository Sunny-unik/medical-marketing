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

export const homePageData = {
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
    title: "testimonial title",
    heading: "testimonial heading",
    testimonials: [
      {
        twitterUsername: "first twitter username",
        twitterName: "first twitter name",
        userImage: "/next.svg",
        testimonial: "first twitter some testimonial",
        tweetLink: "https://twitter.com/tweet-link"
      },
      {
        twitterUsername: "second twitter username",
        twitterName: "second twitter name",
        userImage: "/vercel.svg",
        testimonial: "second twitter testimonial",
        tweetLink: "https://twitter.com/second-link"
      }
    ]
  },
  blogSection: {
    _type: "blogSection",
    title: "blog title",
    heading: "blog heading",
    description: "blog description"
  }
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
