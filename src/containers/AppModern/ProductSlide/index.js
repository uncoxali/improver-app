import React, { Fragment, useState, useEffect } from "react";
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
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
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
      spaceBetween: 20,
    },
  },
};
const ProductSlide = (props) => {
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
                {carousel.map((item, index) => (
                  <div key={index}>
                    <Link href={item.link} key={`productSlide--key${item.id}`}>
                      <div
                        className="item_wrapper"
                        style={{ marginBottom: "10px" }}
                      >
                        <Image src={item.thumb_url} alt={item.title} />
                      </div>
                    </Link>
                  </div>
                ))}
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
