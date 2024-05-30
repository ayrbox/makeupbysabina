import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Banner from "../components/shared/Banner";
import Features from "../components/shared/Features";
import Contact from "../components/shared/Contact";
import PriceTable from "../components/pricing/PriceTable";

const About = () => {
  return (
    <main>
      <Banner
        title="About myself"
        description="I am a certified artist based in London. I specialise in special occasions like Bridal
        Makeup and Hair, Photoshoots, Hairstyling. You can book an appointments for home visit or visit my studio."
        hero={true}
        position="right"
      >
        <StaticImage
          alt="Sabina Maharjan"
          src="../images/sabin-maharjan.jpg"
          objectFit="cover"
          placeholder="tracedSVG"
          style={{ height: "100%", width: "100%" }}
        />
      </Banner>
      <PriceTable />
      <Contact />
      <Features complete={true} />
    </main>
  );
};

export default About;
