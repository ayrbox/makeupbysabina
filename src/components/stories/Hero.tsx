import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <Container>
      <MobileImageDesktop>
        <StaticImage
          src="../../images/feature-client-stories.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          alt="background"
          quality={100}
        />
      </MobileImageDesktop>
      <div style={{ position: "relative" }}>
        <HeroImageDesktop>
          <StaticImage
            src="../../images/feature-client-stories.jpg"
            objectFit="cover"
            placeholder="tracedSVG"
            alt="background"
            quality={100}
          />
        </HeroImageDesktop>
        <TextArea>
          <Featured>MAKING YOUR STORY SPECIAL</Featured>
          <Title>STORIES TO LAST FOREVER</Title>
          <div>
            <Category className="category">Wedding, Photoshoot, HairStyle, Makeup, Nail Art</Category>
          </div>
          <Description>
            As a makeup artist I make your memories filled with colours and confidence.
            The glamours look you always deserve.
          </Description>
        </TextArea>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-rows: 31.7rem 49.5rem;

  @media (min-width: 768px) {
    grid-template-rows: 0 65rem;
  }
`;

const MobileImageDesktop = styled.div`
  position: relative;
  overflow: hidden;
`;

const HeroImageDesktop = styled.div`
  display: none;
  z-index: -1;

  @media (min-width: 768px) {
    display: unset;
  }

  & .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const TextArea = styled.div`
  padding: 0 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  max-width: 1600px;
  margin: auto;
  height: 100%;
  background-color: rgba(0,0,0,0.7);

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

const Featured = styled.span`
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  margin-bottom: 1.6rem;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 125%;
  letter-spacing: 0.33rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;

  @media (min-width: 768px) {
    max-width: 15ch;
    font-size: 4rem;
    letter-spacing: 0.41rem;
  }

  @media (min-width: 950px) {
    font-size: 4.5rem;
  }
`;

const Published = styled.time`
  margin-right: 0.9rem;
  font-size: 1.3rem;
  line-height: 1.7rem;
  opacity: 0.75;
`;

const Category = styled.address`
  display: inline;
  font-size: 1.3rem;
  line-height: 1.7rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 167%;
  opacity: 0.6;
  margin: 1.6rem 0 2.3rem;

  @media (min-width: 768px) {
    max-width: 38ch;
    margin: 2.4rem 0;
    font-size: 1.6rem;
  }

  @media (min-width: 950px) {
    font-size: 1.7rem;
  }
`;
