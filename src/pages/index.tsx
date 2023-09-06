import * as React from "react";
import type { Page } from "gatsby";
import { graphql, PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import Awards from "../components/awards";
import CompanyIntro from "../sections/index/company-intro";
import GridShowcase from "../components/grid-showcase";
import { awards as awardsData, clients as clientsData } from "./index-data";
import HeroSlider from "../sections/index/hero-slider";

const IndexPage = ({ data }: PageProps<Queries.GridShowcaseQuery>) => {
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
          <GridShowcase data={data} />
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const ShowCaseQuery = graphql`
  query GridShowcase {
    allMarkdownRemark(sort: { frontmatter: { order: ASC } }) {
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
  }
`;
