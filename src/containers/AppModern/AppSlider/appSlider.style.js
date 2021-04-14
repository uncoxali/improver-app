import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

import circleBg from "common/assets/image/appClassic/circle-bg.svg";
import screen from "common/assets/image/appModern/screen.png";

const SectionWrapper = styled.div`
  padding: 75px 0 145px;
  margin-top: 1rem;
  @media only screen and (max-width: 1440px) {
    padding: 50px 0 75px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 30px 0 60px;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
  @media only screen and (max-width: 480px) {
    padding: 30px 0;
  }
  > div.container {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const MockupWrapper = styled.div`
  margin-bottom: 81px;
  background-color: ${themeGet("colors.banner", "rgb(29, 35, 54)")};
  padding-top: 80px;
  overflow: hidden;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 1440px) {
    padding-top: 60px;
  }
  @media only screen and (max-width: 767px) {
    margin-bottom: 42px;
    padding-top: 40px;
  }
`;

export const CarouseWrapper = styled.div`
  width: calc(100% - 428px);
  background-image: url(${circleBg});
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  /* background-color: red; */
  @media only screen and (max-width: 1366px) {
    background-size: contain;
    align-self: center;
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% - 350px);
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
    align-self: flex-start;
  }
  .slider-wrapper {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: -15px;
      left: 0;
      width: 100%;
      height: 103%;
      background-image: url(${screen});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      pointer-events: none;
    }
  }

  .glide {
    width: 337px;
    margin: 0 auto;
    position: relative;
    @media only screen and (max-width: 991px) {
      width: 310px;
    }
    @media only screen and (max-width: 667px) {
      width: 260px;
    }
    .glide__slide {
      img {
        display: inline-block;
      }
    }
    .glide__bullets {
      display: flex;
      width: 4px;
      flex-direction: column;
      position: absolute;
      top: calc(50% - 50px);
      left: -51px;
      > button.glide__bullet {
        width: 4px;
        height: 20px;
        border-radius: 5px;
        margin-left: 0;
        margin-right: 0;
        background-color: #d8dce9;
        transition: height 0.3s ease;
        &.glide__bullet--active {
          height: 35px;
          background-color: #d1397c;
        }
      }
    }
  }
`;

export const TextWrapper = styled.div`
  width: 428px;
  align-self: center;
  @media only screen and (max-width: 1366px) {
    padding-left: 30px;
  }
  @media only screen and (max-width: 991px) {
    width: 350px;
    padding-left: 20px;
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
    padding-left: 0;
    margin-top: 40px;
  }
  h2 {
    color: ${themeGet("colors.headingColor", "#0F2137")};
    font-size: 36px;
    line-height: 44px;
    font-weight: 700;
    margin-bottom: 20px;
    @media only screen and (max-width: 1366px) {
      font-size: 30px;
      line-height: 42px;
      margin-bottom: 15px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      margin-bottom: 20px;
    }
  }
  p {
    color: ${themeGet("colors.textColor", "rgba(52, 61, 72, 0.8)")};
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 0;
  }
  > p {
    margin-bottom: 40px;
  }
  .feature__block {
    padding-top: 30px;
    cursor: pointer;
    transition: all 0.05s ease;
    .content__wrapper {
      margin-left: 10px;
    }
    h3 {
      color: ${themeGet("colors.headingColor", "#0F2137")};
      font-size: 18px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 9px;
      @media only screen and (max-width: 1366px) {
        line-height: 26px;
        margin-bottom: 7px;
      }
    }
  }
`;

export const Responsive = styled.div`
  @media only screen and (max-width: 667px) {
    display: none;
    width: 100%;
    padding-left: 0;
    margin-top: 40px;
  }
`;

export const App_store = styled.div`
  .img-div {
    width: 200px;
  }
  .parent {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    height: 100px;
  }

  .parent-img {
    display: flex;
    position: absolute;
    margin-top: 100px;
  }
  @media only screen and (max-width: 700px) {
    .parent-img {
      display: flex;
      position: absolute;
      margin-top: 20px;
    }
  }
`;

export default SectionWrapper;
