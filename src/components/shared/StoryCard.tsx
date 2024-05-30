import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ArrowWhiteIcon from "../../assets/shared/arrow-white.svg";

interface StoryCardProps {
  image: IGatsbyImageData;
  title: string;
  category: string;
  url: string;
}

export default function StoryCard({
  image,
  title,
  category,
  url,
}: StoryCardProps) {
  return (
    <li>
      <Content to={url} target="_blank">
        <Filter className="filter_xaczxl3" />
        <GatsbyImage image={image} alt={title} />
        <Title>
          {title}
        </Title>
        <Category className="category">
          <strong>{category}</strong>
        </Category>
        <Divider />
        <CustomLink>
          view gallery
          <ArrowWhiteIcon />
        </CustomLink>
        <CustomBorder className="customBorder_xtabu23" />
      </Content>
    </li>
  );
}

const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0.27%,
    rgba(0, 0, 0, 0.661222) 100%
  );
  z-index: 9;
`;

const Content = styled(Link)`
  position: relative;
  width: 100%;
  height: 37.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem 33px;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  transition: transform 0.3s ease-out;

  & .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  &:hover {
    transform: translateY(-8%);
    z-index: 90;

    svg {
      margin-left: 8rem;
    }

    .filter_xaczxl3 {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0.27%,
        rgba(0, 0, 0, 0.761222) 100%
      );
    }

    .customBorder_xtabu23 {
      height: 6px;
    }
  }

  @media (min-width: 768px) {
    height: 50em;
  }
`;

const Title = styled.strong`
  z-index: 10;
  position: relative;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 139%;
`;

const Category = styled.address`
  z-index: 10;
  position: relative;
  font-size: 1.4rem;
  line-height: 1.7rem;
  margin-top: 0.4rem;
  font-style: normal;
`;

const Divider = styled.hr`
  height: 2px;
  border: none;
  background: #ffffff;
  opacity: 0.55;
  margin: 1.6rem 0 2rem;
`;

const CustomLink = styled.span`
  z-index: 10;
  position: relative;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;

  svg {
    margin-left: 2rem;
    transition: margin-left 0.3s ease-in-out;
  }
`;

const CustomBorder = styled.div`
  height: 0px;
  width: 100%;
  bottom: 0;
  position: absolute;
  z-index: 11;
  left: 0;
  background: linear-gradient(
    26.57deg,
    #ffc593 0%,
    #bc7198 43.29%,
    #5a77ff 83.33%
  );
  transition: height 0.2s linear;
`;
