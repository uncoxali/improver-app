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

import { appBeauticket } from "common/data/AppModern/beauticket";

const AppSlider = () => {
  const { title, description, features, beauticket } = appBeauticket;

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
          <GlideCarousel
            bullets={true}
            controls={false}
            numberOfBullets={5}
            options={glideOptions}
            carouselSelector="beauticket"
          >
            <Fragment>
              {beauticket.map((item) => (
                <GlideSlide key={`feature-side--key${item.id}`}>
                  <Image src={item.image} alt={item.title} />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </CarouseWrapper>
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
      </Container>
      <div
        className="box-store"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="app-store"
          style={{ position: "absolute", marginTop: "50px" }}
        >
          <img src={LogoGoogle} width="180px" />
          <img
            src={LogoApple}
            width="170px"
            height="50px"
            style={{ marginBottom: "10px" }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AppSlider;
