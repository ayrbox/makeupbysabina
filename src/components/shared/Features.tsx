import React from "react";
import styled from "styled-components";
import take from 'lodash/take'

import BrideIcon from "../../assets/features/bride.svg";
import CalendarIcon from '../../assets/features/calendar.svg'
import CameraIcon from '../../assets/features/camera.svg'
import CertificateIcon from '../../assets/features/certificate.svg'
import HairStyleIcon from '../../assets/features/hair-style.svg'
import NailArtIcon from "../../assets/features/nail-art.svg";

interface FeaturesProps {
  complete: boolean;
}

export default function Features({ complete }: FeaturesProps) {
  const completeList = [
    {
      image: <CalendarIcon />,
      title: "Appointment",
      description:
        "Please book an appointment for your special occassions.",
    },
    {
      image: <CertificateIcon />,
      title: "Certified",
      description: "Certified UK Based Makeup Artist",
    },
    {
      image: <HairStyleIcon />,
      title: "Bridal",
      description: "I got expertise in bridal makeup and hair.",
    },
    {
      image: <CameraIcon />,
      title: "Professional Photoshoot",
      description: "Book an appointment for professional photoshoots.",
    },
    {
      image: <HairStyleIcon />,
      title: "Hair Styling",
      description: "Book an appointment for regular or special occasion hair styling.",
    },
    {
      image: <NailArtIcon />,
      title: "Nail Art",
      description: "Visit my studio for your nail work done.",
    },
  ];
  const list = complete ? completeList : take(completeList, 3);

  return (
    <Container className={`${complete && "complete"}`}>
      {list.map(({ title, description, image }) => (
        <Feature key={title}>
          <Illustration>{image}</Illustration>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Feature>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  background: ${(props) => props.theme.colors.white};
  padding: 8rem 24px;
  list-style: none;
  display: grid;
  gap: 5.6rem;
  text-align: center;

  &.complete {
    padding: 6.4rem 24px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 12rem 24px;

    li:last-of-type {
      grid-column: 1 /3;
    }

    &.complete {
      padding: 11.2rem 24px;

      li:last-of-type {
        grid-column: unset;
      }
    }
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);

    li:last-of-type {
      grid-column: unset;
    }

    &.complete {
      padding: 16rem 24px;
    }
  }
`;

const Feature = styled.li`
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Illustration = styled.div`
  width: 72px;
  height: 72px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin: 4rem 0 1.6rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 139%;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 167%;
  opacity: 0.6;
  max-width: 40ch;
  margin: auto;
`;
