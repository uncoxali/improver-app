import React, { useState, useEffect } from "react";
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
  ModalGroup,
} from "./banner.style";

import { client } from "common/data/AppModern";
import Modal from "react-modal";
import microsoft from "common/assets/image/appModern/envato-icon.png";
import bannerImg from "common/assets/image/appModern/banner2.png";
import videoBanner1 from "common/assets/image/appModern/video-1.png";
import videoBanner2 from "common/assets/image/appModern/video-2.png";
import circleBorder from "common/assets/image/appModern/shape.svg";
import LogoImage from "common/assets/image/appModern/improver-white.png";
import Telephone from "common/assets/image/telephon.png";
import Mail from "common/assets/image/email.png";
import Pin from "common/assets/image/pin.png";
import style from "./style.module.css";
import { linearGradient } from "polished";
import axios from "axios";

import { useForm } from "react-hook-form";

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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0px",
    borderRadius: "35px",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

const Api = "https://web-api.improver.com.tr/api/project/v1/addProject";

const Banner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    axios
      .post("https://web-api.improver.com.tr/api/project/v1/addProject", data)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
    e.target.reset();
  };

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
                onClick={() => setModalIsOpen(true)}
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
        className=""
      >
        <ModalGroup>
          <div className="modal-parent">
            <div className="contact-us">
              <img className="logo-image" src={LogoImage} />
              <p className="text-color">Contact Information</p>
              <p className="text-color">
                You Can Fill The Contact From And Contact Us Every Time Of day.
              </p>
              <div className="contact">
                <img src={Telephone} className="telephone" />
                <p className="text-number">+908508403346</p>
              </div>
              <div className="contact">
                <img src={Mail} className="telephone" />
                <p className="text-number">info@improver.com.tr</p>
              </div>
              <div className="contact">
                <img src={Pin} className="telephone" />
                <p className="text-number">info@improver.com.tr</p>
              </div>
            </div>
            <div className="nav-mobile">
              <div className="nav-text">Contaction Form</div>
              <div
                className="close-mobile"
                onClick={() => setModalIsOpen(false)}
              >
                X
              </div>
            </div>
            <div className="close-btn" onClick={() => setModalIsOpen(false)}>
              X
            </div>
            <div className="form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>Name</label>
                  <input
                    {...register("username", { required: true })}
                    className="input-name"
                    type="text"
                    name="username"
                    placeholder="Enter Your Name"
                  />
                  {errors.username && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                <div className="input">
                  <div>
                    <p>Mail</p>
                    <input
                      {...register("email", { required: true })}
                      className="input-mail"
                      type="Email"
                      name="email"
                      placeholder="Enter Your Mail"
                    />
                    {errors.email && (
                      <span style={{ color: "red", display: "block" }}>
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <p>Phone</p>
                    <input
                      {...register("phoneNumber", { required: true })}
                      className="input-number"
                      type="number"
                      name="phoneNumber"
                      placeholder="Enter Your Phone"
                    />
                    {errors.phoneNumber && (
                      <span style={{ color: "red", display: "block" }}>
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="radio-btn">
                  <p>Which Department You Want To Contact?</p>
                  <div className="radio">
                    <input
                      {...register("service", { required: true })}
                      className="radiob"
                      type="radio"
                      name="service"
                      value="service Development"
                    />
                    <label id="" className="">
                      service Development
                    </label>
                    <input
                      {...register("service")}
                      className="radiob"
                      type="radio"
                      name="service"
                      value="Web Development"
                    />
                    <label id="" className="">
                      Web Development
                    </label>
                    <input
                      {...register("service")}
                      className="radiob"
                      type="radio"
                      name="service"
                      value="Advertising"
                    />
                    <label id="" className="">
                      Advertising
                    </label>
                    <input
                      {...register("service")}
                      className="radiob"
                      type="radio"
                      name="service"
                      value="SEO/ASO"
                    />
                    <label id="" className="">
                      SEO/ASO
                    </label>
                  </div>
                </div>
                <div className="text-area">
                  <p>Massege</p>
                  <textarea
                    {...register("description", { required: true })}
                    type="text"
                    placeholder="Enter Your Massege"
                    className="textarea"
                    name="description"
                  />
                  {errors.description && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                <button className="submit">Send</button>
              </form>
            </div>
          </div>
        </ModalGroup>
        {/* <div className="flex">
            
            <div className="bg-white-500 w-110 p-5">
              <div
                className="cursor-pointer right-7 absolute text-4xl"
                onClick={() => setModalIsOpen(false)}
              >
                X
              </div>
              <form className="p-10">
                <div>
                  <p>Name</p>
                  <input
                    className="border-b-2 mt-2 border-gray-700 w-full"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="flex">
                  <div className="mt-16 w-1/2">
                    <p>Mail</p>
                    <input
                      className="border-b-2 mt-2 border-gray-700 w-72"
                      type="email"
                      placeholder="Enter Your Mail Address"
                    />
                  </div>
                  <div className="mt-16 w-1/2">
                    <p>Number</p>
                    <input
                      className="border-b-2 mt-2 border-gray-700 w-full"
                      type="email"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>
                <div className="mt-16">
                  <p>Which Department You Want To Contact?</p>
                  <div className="flex mt-10 justify-around">
                    <input className="mt-2" type="radio" name="app" />
                    <label id="" className="mr-3">
                      App Development
                    </label>
                    <input className="mt-2" type="radio" name="app" />
                    <label id="" className="mr-3">
                      Web Development
                    </label>
                    <input className="mt-2" type="radio" name="app" />
                    <label id="" className="mr-3">
                      Advertising
                    </label>
                    <input className="mt-2" type="radio" name="app" />
                    <label id="" className="mr-3">
                      SEO/ASO
                    </label>
                  </div>
                </div>
                <div className="mt-16">
                  <p>Massege</p>
                  <textarea
                    type="text"
                    placeholder="Enter Your Massege"
                    className="border-b-2 mt-2 border-gray-700 w-full"
                  />
                </div>
              </form>
            </div>
          </div> */}
      </Modal>
    </BannerWrapper>
  );
};

export default Banner;
