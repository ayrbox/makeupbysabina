import { IGatsbyImageData } from "gatsby-plugin-image";
export type Story = {
  id: string;
  name: string;
  category: string;
  url: string;
  thumbnail: {
    id: string;
    childImageSharp: {
      image: IGatsbyImageData;
    };
  };
};

export type Prices = {
  id: string;
  category: string;
  services: {
    title: string,
    price: number
    description?: string
  }[]
};
