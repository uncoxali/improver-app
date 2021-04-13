import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 802px;
  overflow: hidden;
  position: relative;
  background-image: -moz-linear-gradient(
    139deg,
    rgb(100, 43, 115) 0%,
    rgb(198, 66, 110) 100%
  );
  background-image: -webkit-linear-gradient(
    139deg,
    rgb(100, 43, 115) 0%,
    rgb(198, 66, 110) 100%
  );
  background-image: -ms-linear-gradient(
    139deg,
    rgb(100, 43, 115) 0%,
    rgb(198, 66, 110) 100%
  );
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 1099px) {
    min-height: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 90px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
      margin-top: 35px;
      align-items: flex-start;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
  .bannerBottomShape {
    position: absolute;
    right: 0;
    bottom: -2px;
    @media only screen and (max-width: 999px) {
      display: none;
    }
  }

  #colorLinear {
    background-color: aqua;
  }
`;

export const ModalGroup = styled.div`
  .modal-parent {
    display: flex;
    width: 1100px;
  }

  .text-color {
    margin-top: 40px;
    color: white;
    font-size: 20px;
  }
  .form {
    width: 700px;
    padding: 20px;
  }
  .logo-image {
    width: 200px;
  }
  .close-btn {
    cursor: pointer;
    font-size: 30px;
    position: absolute;
    right: 20px;
    margin-top: 10px;
  }
  .input-name {
    padding: 10px;
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
  }
  .input {
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .input-mail {
    padding: 10px;
    width: 260px;
    border: none;
    border-bottom: 1px solid black;
  }
  .input-number {
    padding: 10px;
    width: 260px;
    border: none;
    border-bottom: 1px solid black;
  }
  .contact-us {
    padding: 50px;
    width: 500px;
    background: rgb(166, 16, 138);
    background: linear-gradient(
      90deg,
      rgba(166, 16, 138, 0.93) 4%,
      rgba(129, 9, 103, 1) 60%
    );

    .contact {
      display: flex;
      margin-top: 20px;
    }
    .telephone {
      width: 30px;
      height: 30px;
      margin-top: 10px;
    }
    .text-number {
      color: white;
      margin-left: 30px;
    }
  }

  .radio-btn {
    margin-top: 60px;
  }

  .radio {
    display: flex;
    margin-top: 30px;
  }
  .radiob {
    margin-left: 20px;
  }
  .text-area {
    margin-top: 50px;
  }
  .textarea {
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
  }

  .close-mobile {
    cursor: pointer;
    font-size: 30px;
    position: absolute;
    right: 20px;
    margin-top: 5px;
    color: white;
  }
  .submit {
    margin-top: 10px;
    float: right;
    border: none;
    width: 260px;
    padding: 10px;
    color: white;
    border-radius: 35px;
    background: rgb(166, 16, 138);
    background: linear-gradient(
      90deg,
      rgba(150, 16, 138, 0.8) 4%,
      rgba(115, 9, 103, 1) 60%
    );
  }

  .nav-text {
    display: none;
  }
  @media only screen and (min-width: 900) {
    .modal-parent {
      width: 500px;
    }
    .contact-us {
      display: none;
      padding: 50px;
      width: 500px;
      background: rgb(166, 16, 138);
      background: linear-gradient(
        90deg,
        rgba(166, 16, 138, 0.93) 4%,
        rgba(129, 9, 103, 1) 60%
      );

      .contact {
        display: flex;
        margin-top: 20px;
      }
      .telephone {
        width: 30px;
        height: 30px;
        margin-top: 10px;
      }
      .text-number {
        color: white;
        margin-left: 30px;
      }
    }
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .modal-parent {
      display: block;
      width: 340px;
      overflow-x: hidden;
    }
    .close-btn {
      cursor: pointer;
      font-size: 30px;
      position: absolute;
      right: 20px;
      margin-top: 7px;
      display: none;
    }
    .nav-text {
      display: block;
      color: white;
      margin-top: 10px;
      margin-left: 10px;
    }
    .nav-mobile {
      display: flex;
      justify-content: space-between;
      height: 45px;
      background: rgb(166, 16, 138);
      background: linear-gradient(
        90deg,
        rgba(166, 16, 138, 0.7) 4%,
        rgba(129, 9, 103, 1) 60%
      );
    }

    .submit {
      float: none;
      border: none;
      width: 300px;
      padding: 10px;
      color: white;
      border-radius: 35px;
      background: rgb(166, 16, 138);
      background: linear-gradient(
        90deg,
        rgba(150, 16, 138, 0.8) 4%,
        rgba(115, 9, 103, 1) 60%
      );
    }
    .input-name {
      padding: 2px;
      border: none;
      border-bottom: 1px solid black;
      width: 200px;
    }
    .input-mail {
      padding: 2px;
      width: 200px;
      border: none;
      border-bottom: 1px solid black;
    }
    .input-number {
      padding: 2px;
      width: 200px;
      border: none;
      border-bottom: 1px solid black;
    }
    .radio-btn {
      margin-top: 60px;
      display: none;
    }
    .text-area {
      margin-top: 30px;
    }
    .textarea {
      padding: 2px;
      border: none;
      border-bottom: 1px solid black;
      width: 300px;
      margin-bottom: 20px;
    }
    .input {
      margin-top: 10px;
      display: block;
      width: 100%;
      justify-content: space-between;
    }
    .contact-us {
      display: none;
      padding: 50px;
      width: 500px;
      background: rgb(166, 16, 138);
      background: linear-gradient(
        90deg,
        rgba(166, 16, 138, 0.93) 4%,
        rgba(129, 9, 103, 1) 60%
      );

      .contact {
        display: flex;
        margin-top: 20px;
      }
      .telephone {
        width: 30px;
        height: 30px;
        margin-top: 10px;
      }
      .text-number {
        color: white;
        margin-left: 30px;
      }
    }
  }
`;

export const BannerContent = styled.div`
  width: 40%;
  flex-shrink: 0;
  @media only screen and (max-width: 1199px) {
    flex-shrink: 0;
    width: 100%;
    margin-top: 25px;
  }

  h1 {
    font-size: 46px;
    line-height: 55px;
    font-weight: 700;
    color: ${themeGet("colors.menu", "#0D233E")};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 20px;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    line-height: 29px;
  }
`;

export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  color: ${themeGet("colors.menu", "#0D233E")};

  .rating {
    margin-right: 10px;
    .star {
      color: ${themeGet("colors.white", "#fff")};
    }
    .star-o {
      color: #e8e8e8;
    }
  }

  img {
    margin-left: 9px;
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  img {
    margin-left: -40px;
    margin-top: 50px;
    @media only screen and (max-width: 1440px) {
      margin-top: 0px;
    }
  }
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;

    &.primary {
      background-color: ${themeGet("colors.white", "#fff")};
      color: rgb(15, 33, 55);
      font-size: 16px;
      letter-spacing: -0.1px;
      &:hover {
        box-shadow: #1e2a4a 0px 12px 24px -10px;
      }
    }

    &.text {
      font-size: 16px;
      color: ${themeGet("colors.white", "#fff")};
      letter-spacing: -0.1px;
      font-weight: 500;
      .btn-icon {
        i {
          color: #fff;
        }
        svg {
          width: auto;
          height: 25px;
        }
      }
    }
  }
`;
export const VideoGroup = styled.div`
  display: flex;
  margin-top: 60px;
  @media only screen and (max-width: 768px) {
    margin-top: 45px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  img {
    margin-right: 10px;
    max-width: 100%;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    @media only screen and (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;

export const BoxModal = styled.div`
  @media only screen and (max-width: 1440px) {
    height: 600px;
    width: 1200px;
    background-color: red;
  }
  @media only screen and (max-width: 1099px) {
    padding: 55px 0 55px;
    max-width: 920px;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 25px 0 40px;
  }
`;
export const VideoWrapper = styled.div`
  border-radius: 25px !important;
  max-width: 100%;
  width: 1400px;
  position: relative;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const CustomerWrapper = styled.div`
  max-width: 850px;
  padding: 0px 0 70px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    padding: 0px 0 55px;
  }
  @media only screen and (max-width: 1099px) {
    padding: 55px 0 55px;
    max-width: 920px;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 25px 0 40px;
  }

  p {
    margin: 0 12px 0 0;
    color: ${themeGet("colors.menu", "#0D233E")};
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }
  img {
    margin: 0 12px;
    @media only screen and (max-width: 667px) {
      margin: 5px 10px;
    }
  }
`;
export default BannerWrapper;
