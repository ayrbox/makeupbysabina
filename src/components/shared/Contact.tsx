import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import ArrowWhiteIcon from "../../assets/shared/arrow-white.svg";

export default function Contact() {
  return (
    <Container>
      <ColorfullLine />
      <ImageWrapper>
        <StaticImage
          alt="Camera"
          src="../images/about-camera.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          style={{ height: "100%", width: "100%" }}
        />
      </ImageWrapper>
      <ContentWrapper>
        <Title>
          Drop me DM or an email if you like to know more about my work.
        </Title>
        <CustomLink to="mailto:info@makeupbysabin.com">
          get in touch
          <ArrowWhiteIcon />
        </CustomLink>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.section`
  color: ${(props) => props.theme.colors.white};
  padding: 0 33px;
  position: relative;
  height: 28.8rem;

  @media (min-width: 768px) {
    height: 28rem;
    padding: 0 40px;
  }
`;

const ColorfullLine = styled.div`
  position: absolute;
  height: 6px;
  width: 36%;
  left: 24px;
  top: 0;
  background: linear-gradient(
    26.57deg,
    #ffc593 0%,
    #bc7198 43.29%,
    #5a77ff 83.33%
  );

  @media (min-width: 768px) {
    height: 100%;
    width: 6px;
    left: 0;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  max-width: 1500px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 125%;
  letter-spacing: 0.33rem;
  text-transform: uppercase;
  margin-bottom: 2.4rem;

  @media (min-width: 768px) {
    font-size: 4rem;
    letter-spacing: 0.41rem;
    margin-bottom: 0;
  }

  @media (min-width: 950px) {
    font-size: 4.5rem;
  }
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  line-height: 1.7rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    svg {
      margin-left: 8rem;
    }
  }

  @media (min-width: 950px) {
    margin: 0;
    text-align: right;
  }

  svg {
    transition: margin-left 0.3s ease;
    margin-left: 1.8rem;
  }
`;
