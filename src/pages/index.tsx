import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Banner from "../components/shared/Banner";
import { StaticImage } from "gatsby-plugin-image";
import StoryCard from "../components/shared/StoryCard";
import Features from "../components/shared/Features";
import { Story } from "../types";

export interface HomeProps {
  data: {
    allStoriesYaml: {
      edges: Array<{ node: Story }>;
    };
  };
}

const Home = ({ data }: HomeProps) => {
  return (
    <main>
      <Banner
        title="Glamorous and Confident"
        description="I help provoke the confidence within you with a bit of glam touch."
        hero={true}
        link={{
          label: "Learn more",
          url: "/about",
        }}
      >
        <StaticImage
          alt="Featured Model"
          src="../images/feature-main.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          style={{ height: "100%", width: "100%" }}
        />
      </Banner>
      <Banner
        position="right"
        title="Every artist was first an amateur"
        description="I have hone artistry in me with years practice. I now understand the emotion in the artist and the model."
        link={{
          label: "Learn more",
          url: "/about",
        }}
      >
        <StaticImage
          alt="Feature Makeup Brushes"
          src="../images/feature-second.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          style={{ height: "100%", width: "100%" }}
        />
      </Banner>
      <StoriesList>
        {data?.allStoriesYaml?.edges.map(({ node }) => (
          <StoryCard
            key={node.id}
            title={node.name}
            image={node?.thumbnail?.childImageSharp?.image}
            category={node.category}
            url={node.url}
          />
        ))}
      </StoriesList>
      <Features complete={false} />
    </main>
  );
};

export default Home;

export const query = graphql`
  query HomeStories {
    allStoriesYaml(limit: 4, skip: 0) {
      edges {
        node {
          name
          id
          category
          url
          thumbnail {
            id
            childImageSharp {
              image: gatsbyImageData(
                width: 500
                height: 500
                placeholder: TRACED_SVG
              )
            }
          }
        }
      }
    }
  }
`;


const StoriesList = styled.ul`
  list-style: none;
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
