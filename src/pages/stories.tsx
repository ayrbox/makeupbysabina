import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Hero from "../components/stories/Hero";
import StoryCard from "../components/shared/StoryCard";
import shuffle from "lodash/shuffle";
import { Story } from "../types";

export interface StoriesProps {
  data: {
    allStoriesYaml: {
      edges: Array<{ node: Story }>;
    };
  };
}

const Stories = ({ data }: StoriesProps) => {
  const shuffledStories = shuffle(data?.allStoriesYaml?.edges || []);
  return (
    <main>
      <Hero />
      <StoriesList>
        {shuffledStories.map(({ node }) => (
          <StoryCard
            key={node.id}
            title={node.name}
            image={node?.thumbnail?.childImageSharp?.image}
            category={node.category}
            url={node.url}
          />
        ))}
      </StoriesList>
    </main>
  );
};

export const query = graphql`
  query StoriesQuery {
    allStoriesYaml {
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

export default Stories;

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
