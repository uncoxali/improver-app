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

import { pageStily } from "common/data/AppModern/stily";
import Fade from "react-reveal/Fade";

const AppSlider = () => {
  const { title, description, features, carousel } = pageStily;

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
            <div className="slider-wrapper">
              <GlideCarousel
                bullets={true}
                controls={false}
                numberOfBullets={5}
                options={glideOptions}
                carouselSelector="stily"
              >
                <Fragment>
                  {carousel.map((item) => (
                    <GlideSlide key={`feature-side--key${item.id}`}>
                      <Image src={item.image} alt={item.title} />
                    </GlideSlide>
                  ))}
                </Fragment>
              </GlideCarousel>
            </div>
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
      <div className="mt-3 flex justify-center h-20">
        <div className="flex absolute lg:mt-20">
          <div className="w-44 ml-10">
            <img src={LogoGoogle} />
          </div>
          <div className="w-36 mr-10 mt-3">
            <img className="" src={LogoApple} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AppSlider;
