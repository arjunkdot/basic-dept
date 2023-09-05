import { PageProps, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";


const GridShowcase = ({data} : PageProps<Queries.GridShowcaseQuery>) => {
  return (
    <ul>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <li key={edge.node?.id}>
            <Link to={edge.node?.frontmatter?.path}>
              {edge.node?.frontmatter?.mediaType === "video" ? (
                <video autoPlay loop muted>
                  <source
                    src={edge.node.frontmatter.featureVideoURL}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <GatsbyImage
                  image={getImage(edge.node?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData)}
                  alt="h"
                />
              )}
              <h2>{edge.node?.frontmatter?.title}</h2>
              <p>{edge.node?.frontmatter?.excerpt}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default GridShowcase;

