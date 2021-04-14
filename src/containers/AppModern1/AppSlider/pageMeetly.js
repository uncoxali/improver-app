import React, { Fragment } from "react";
import Text from "common/components/Text";
import Image from "common/components/Image";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import FeatureBlock from "common/components/FeatureBlock";
import GlideCarousel from "common/components/GlideCarousel";
import GlideSlide from "common/components/GlideCarousel/glideSlide";
import SectionWrapper, { CarouseWrapper, TextWrapper } from "./appSlider.style";
import LogoGoogle from "common/assets/image/appModern/google.png";
import LogoApple from "common/assets/image/appModern/apple.png";

import { appMeetly } from "common/data/AppModern/meetly";
import Fade from "react-reveal/Fade";

const AppSlider = () => {
  const { title, description, features, carousel } = appMeetly;

  const glideOptions = {
    type: "carousel",
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };

  return (
    <SectionWrapper>
      <Container>
        <CarouseWrapper>
          <Fade left>
            <GlideCarousel
              bullets={true}
              controls={false}
              numberOfBullets={4}
              options={glideOptions}
              carouselSelector="meetly"
            >
              <Fragment>
                {carousel.map((item) => (
                  <GlideSlide key={`feature-side--key${item.id}`}>
                    <Image src={item.image} alt={item.title} />
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          </Fade>
        </CarouseWrapper>
        <Fade right>
          <TextWrapper>
            <Heading content={title} />
            <Text content={description} />
            {features.map((item) => (
              <FeatureBlock
                key={`app-feature--key${item.id}`}
                iconPosition="left"
                icon={<img src={item.icon} alt={item.title} />}
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            ))}
          </TextWrapper>
        </Fade>
      </Container>
      <div
        className=""
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          height: "100px",
        }}
      >
        <div style={{ marginTop: "30px" }}>
          <img src={LogoGoogle} width="180px" />
          <img
            src={LogoApple}
            width="170px"
            height="47px"
            style={{ marginBottom: "12px" }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AppSlider;