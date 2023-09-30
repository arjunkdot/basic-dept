import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import Awards from "../components/awards";
import CompanyIntro from "../sections/index/company-intro";
import GridShowcase from "../components/grid-showcase";
import HeroSlider from "../sections/index/hero-slider";
import FeaturedEngagements from "../sections/index/featured-engagements";
import Spotlight from "../sections/index/spotlight";
import FeaturedNews from "../sections/index/featured-news";
import { isBrowser } from "./../utils/utils";
const IndexPage = ({ data }: PageProps<Queries.GridShowcaseQuery>) => {

  if (!isBrowser) {
    return;
  }

  const caseStudies = data.caseStudies;
  const clients = data.clients;
  const blogs = data.blogs;
  const awards = data.awards;

  // Toggle dark mode on/off based on scroll positions
  React.useEffect(() => {
    function toggleDarkMode() {
      const htmlEl = document.querySelector("html");
      const startEl = document.getElementById("dark-mode-trigger");

      if (
        startEl?.getBoundingClientRect().top! < 280 &&
        startEl?.getBoundingClientRect().top! >= -700
      ) {
        htmlEl?.classList.add("dark");
      } else {
        htmlEl?.classList.remove("dark");
      }
    }

    window.addEventListener("scroll", toggleDarkMode);

    return () => window.removeEventListener("scroll", toggleDarkMode);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          BASIC/DEPT® | Digital Branding &amp; Product Design Agency
        </title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Helmet>

      <main>
        <HeroSlider />
        <div className="bs-wrapper">
          <Awards data={awards} />
          <CompanyIntro />
        </div>
        <GridShowcase data={caseStudies} />
        <FeaturedEngagements data={clients} />
        <div id="dark-mode-trigger" className="bs-wrapper">
          <Spotlight />
          <FeaturedNews data={blogs} />
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const ShowCaseQuery = graphql`
  query GridShowcase {
    caseStudies: allMarkdownRemark(
      sort: { frontmatter: { order: ASC } }
      filter: { frontmatter: { type: { eq: "case-study" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            featuredImgAlt
            featureVideoURL
            mediaType
            path
            excerpt
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 500, placeholder: DOMINANT_COLOR)
              }
            }
          }
          id
        }
      }
    }

    clients: allMarkdownRemark(
      sort: { frontmatter: { order: ASC } }
      filter: { frontmatter: { type: { eq: "clients" } } }
    ) {
      edges {
        node {
          frontmatter {
            featuredImage {
              relativePath
            }
            title
            order
            featuredImgAlt
          }
          id
          html
        }
      }
    }
    blogs: allMarkdownRemark(
      sort: { frontmatter: { order: ASC } }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          frontmatter {
            id
            title
            order
            date
            category
            featuredImageAlt
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 720, placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
    awards: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "awards" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            order
            path
            featuredImageAlt
            featuredImage {
              relativePath
            }
          }
          id
          internal {
            content
          }
        }
      }
    }
  }
`;
