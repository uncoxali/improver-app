import React from "react";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { playCircle } from "react-icons-kit/fa/playCircle";
import { openModal, closeModal } from "@redq/reuse-modal";
import Text from "common/components/Text";
import Image from "common/components/Image";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Rating from "common/components/Rating";
import Container from "common/components/UI/Container";
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
  ImageWrapper,
} from "./banner.style";

import { client } from "common/data/AppModern";

import microsoft from "common/assets/image/appModern/envato-icon.png";
import bannerImg from "common/assets/image/appModern/banner2.png";
import videoBanner1 from "common/assets/image/appModern/video-1.png";
import videoBanner2 from "common/assets/image/appModern/video-2.png";
import circleBorder from "common/assets/image/appModern/shape.svg";
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

// const ModalContent = () => <div></div>;

const Banner = () => {
  // modal handler
  // const handleVideoModal = () => {
  //   openModal({
  //     config: {
  //       className: "modal",
  //     },
  //     component: ModalContent,
  //   });
  // };
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            {/* <RatingInfo>
              <Rating rating={4} />
              4.9 of 5 By <img src={microsoft} alt="Microsoft" />
            </RatingInfo> */}
          </Fade>
          <Fade up delay={100}>
            <Heading as="h1" content="Mobil Uygulama Yazılımı ve Geliştirme" />
          </Fade>
          <Fade up delay={200}>
            <Text content="Global yazılım deneyimlerimizi hayalinizdeki uygulama ile birleştirip, hedeflerinizin ötesine taşıyalım." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button
                onClick={() => alert("modal")}
                className="primary"
                title="Get a quote"
              />
              {/* <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Video"
              /> */}
            </ButtonGroup>
          </Fade>
          <VideoGroup>
            <img src={videoBanner1} alt="Microsoft" />
            <img src={videoBanner2} alt="Microsoft" />
          </VideoGroup>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
      <CustomerWrapper>
        <Text content="Trusted by companies like:" />
        <ImageWrapper>
          {client.map((item) => (
            <Image
              key={`client-key${item.id}`}
              src={item.image}
              alt={item.title}
            />
          ))}
        </ImageWrapper>
      </CustomerWrapper>
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;