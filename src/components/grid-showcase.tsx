import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

interface GridShowcaseProps {
  items: {
    id: number;
    video: boolean;
    videoType?: string;
    mediaURL: string;
    path: string;
    title: string;
    description: string;
  }[];
}
const GridShowcase = ({ items }: GridShowcaseProps) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.path}>
              {item.video ? (
                <video autoPlay loop muted>
                  <source src={item.mediaURL} type={item.videoType} />
                </video>
              ) : (
                <img src="dgd" alt={item.title} />
              )}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default GridShowcase;

export const pageQuery = graphql`
  query {
    showCaseInformation: allMarkdownRemark {
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
        }
      }
    }
  }
`;
