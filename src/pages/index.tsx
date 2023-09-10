import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { awards as awardsData } from "./index-data";
import Awards from "../components/awards";
import CompanyIntro from "../sections/index/company-intro";
import GridShowcase from "../components/grid-showcase";
import HeroSlider from "../sections/index/hero-slider";
import FeaturedEngagements from "../sections/index/featured-engagements";

const IndexPage = ({ data }: PageProps<Queries.GridShowcaseQuery>) => {
  const caseStudies = data.caseStudies;
  const clients = data.clients;
  return (
    <>
      <div className="bs-noise-background"></div>
      <Helmet>
        <title>
          BASIC/DEPT® | Digital Branding &amp; Product Design Agency
        </title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Helmet>

      <main>
        <HeroSlider />
        <div className="bs-wrapper">
          <Awards items={awardsData} />
          <CompanyIntro />
          <GridShowcase data={caseStudies} />
        </div>
        <FeaturedEngagements data={clients} />
      </main>
    </>
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
          internal {
            content
          }
        }
      }
    }
  }
`;
