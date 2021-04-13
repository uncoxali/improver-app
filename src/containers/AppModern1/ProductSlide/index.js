import React, { Fragment, useState, useEffect, Children } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import GlideCarousel from "common/components/GlideCarousel";
import GlideSlide from "common/components/GlideCarousel/glideSlide";
import Swiper from "react-id-swiper";

import ProductSlideWrapper, {
  Container,
  CarouselArea,
  CircleLoader,
  MockupWrapper,
  SectionHeader,
} from "./productSlide.style";

import { productData } from "common/data/AppModern";
import SlideMockup from "common/assets/image/appModern/screen.png";
const params = {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 50,
  paginationClickable: true,

  loop: true,
  autoplay: {
    delay: 2000,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
};
const ProductSlide = () => {
  const { carousel, slogan, title } = productData;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <ProductSlideWrapper>
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>
        <CarouselArea>
          {loading ? (
            <Fragment>
              <MockupWrapper>
                <Image src={SlideMockup} alt="mockup" />
              </MockupWrapper>
              <Swiper {...params}>
                {Children.toArray(
                  carousel.map((item, index) => (
                    <div>
                      <div
                        className="item_wrapper"
                        style={{ marginBottom: "10px" }}
                      >
                        <Image src={item.thumb_url} alt={item.title} />
                      </div>
                    </div>
                  ))
                )}
              </Swiper>
            </Fragment>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
      <div style={{ marginTop: "150px" }}></div>
    </ProductSlideWrapper>
  );
};

export default ProductSlide;
