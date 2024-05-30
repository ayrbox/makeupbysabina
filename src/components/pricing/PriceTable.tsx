import { StaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Prices } from "../../types";

type PriceData = {
  allPricesYaml: {
    edges: Array<{ node: Prices }>;
  };
};

export interface PriceTableProps {
  data: PriceData;
}

const PriceTable = ({ data }: PriceTableProps) => {
  return (
    <Container>
      <ContentWrapper>
        <Title>Prices</Title>
        {data.allPricesYaml.edges.map(({ node }) => (
          <React.Fragment key={node.id}>
            <SubTitlesArea>
              <SubTitle>{node.category}</SubTitle>
              <DisDesktopSubTitle>Price</DisDesktopSubTitle>
            </SubTitlesArea>
            <PriceList>
              {node.services.map(s => (
                <PriceItem key={s.title} >
                  <PriceTitle>{s.title}</PriceTitle>
                  <PriceAmount>{s.price.toFixed(2)}</PriceAmount>
                  {s.description &&
                    <PriceDescription>{s.description}</PriceDescription>
                  }
                </PriceItem>
              ))}
            </PriceList>
          </React.Fragment>
        ))}

        <OtherEvent>
          Please reach out to me if you would like to hire me for wedding, engagement, photoshoot or any other special events.
        </OtherEvent>
        <PriceNote>
          <p>
            On all bookings a 20% non refundable deposit is required.
            Travel expense may be included if I required to travel.
          </p>
        </PriceNote>
      </ContentWrapper>
    </Container >
  );
};

export default function PriceTableContainer() {
  return (
    <StaticQuery
      query={graphql`
       query PriceQuery {
          allPricesYaml {
            edges {
              node {
                id
                category
                services {
                  title
                  price
                  description
                }
              }
            }
          }
        }
      `}
      render={(data: PriceData) => <PriceTable data={data} />}
    />
  );
}

const Container = styled.section`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  padding: 6.4rem 29px;

  @media (min-width: 768px) {
    padding: 11.2rem 40px;
  }

  @media (min-width: 768px) {
    padding: 16rem 40px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 695px;
  margin: auto;
`;

const Title = styled.h2`
  display: none;
  text-transform: uppercase;
  text-align: center;
  font-size: 4rem;
  line-height: 120%;
  letter-spacing: 0.41rem;
  margin-bottom: 6.4rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin-right: auto;
`;

const SubTitlesArea = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  padding: 0 0 2.3rem 24px;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

const DisDesktopSubTitle = styled(SubTitle)`
  margin-right: unset;
  width: 140px;
  text-align: right;
`;

const PriceList = styled.ul`
  list-style: none;
  margin-top: 2.3rem;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
`;

const PriceItem = styled.li`
  display: grid;
  grid-template-columns: 8fr 2fr;
  grid-template-rows: 1fr 1fr;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  padding-bottom: 0.4rem;
`;

const PriceTitle = styled.h4`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;

  @media (min-width: 768px) {
    margin: 0 0 0 24px;
    width: 307px;
  }
`;

const PriceAmount = styled.h3`
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  text-align: right;

  @media (min-width: 768px) {
    margin: 0 0 0 24px;
  }

  &:before {
    content: "£";
  }
`;

const PriceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  grid-column: 1/3;

  @media (min-width: 768px) {
    margin: 4px 0 0 24px;
    grid-column: 1/2;
  }
`;

const OtherEvent = styled.div`
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  padding: 5rem 0;
  letter-spacing: 0.1rem;
`;

const PriceNote = styled.div`
  & p {
    font-style: italic;
    margin-bottom: 1rem;
  }
`;
