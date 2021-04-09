// import React, { Fragment } from 'react';
// import Head from 'next/head';
// import Sticky from 'react-stickynode';
// import { ThemeProvider } from 'styled-components';
// import { agencyTheme } from 'common/theme/agency';
// import { ResetCSS } from 'common/assets/css/style';
// import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style';
// import Navbar from 'containers/Agency/Navbar';
// import BannerSection from 'containers/Agency/BannerSection';
// import FeatureSection from 'containers/Agency/FeatureSection';
// import AboutUsSection from 'containers/Agency/AboutUsSection';
// import WorkHistory from 'containers/Agency/WorkHistory';
// import BlogSection from 'containers/Agency/BlogSection';
// import TestimonialSection from 'containers/Agency/TestimonialSection';
// import TeamSection from 'containers/Agency/TeamSection';
// import VideoSection from 'containers/Agency/VideoSection';
// import NewsletterSection from 'containers/Agency/NewsletterSection';
// import QualitySection from 'containers/Agency/QualitySection';
// import Footer from 'containers/Agency/Footer';
// import { DrawerProvider } from 'common/contexts/DrawerContext';
// import FaqSection from 'containers/Agency/FaqSection';

// const Main = () => {
//   return (
//     <ThemeProvider theme={agencyTheme}>
//       <Fragment>
//         {/* Start agency head section */}
//         <Head>
//           <title>Agency | A react next landing page</title>
//           <meta name="theme-color" content="#10ac84" />
//           <meta name="Description" content="React next landing page" />
//           {/* Load google fonts */}
//           <link
//             href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
//             rel="stylesheet"
//           />
//         </Head>
//         <ResetCSS />
//         <GlobalStyle />
//         {/* End of agency head section */}
//         {/* Start agency wrapper section */}
//         <AgencyWrapper>
//           <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
//             <DrawerProvider>
//               <Navbar />
//             </DrawerProvider>
//           </Sticky>
//           <BannerSection />
//           <FeatureSection />
//           <AboutUsSection />
//           <WorkHistory />
//           <BlogSection />
//           <QualitySection />
//           <VideoSection />
//           <TestimonialSection />
//           <TeamSection />
//           <FaqSection />
//           <NewsletterSection />
//           <Footer />
//         </AgencyWrapper>
//         {/* End of agency wrapper section */}
//       </Fragment>
//     </ThemeProvider>
//   );
// };
// export default Main;
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/appModern";
import { ResetCSS } from "common/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "containers/AppModern/Navbar";
import Banner from "containers/AppModern/Banner";

import PageEvet from "containers/AppModern/AppSlider/pageEvet";
import PageBeaticket from "containers/AppModern/AppSlider/pageBeaticket";
import PageFlow from "containers/AppModern/AppSlider/pageFlow";
import PageMeetly from "containers/AppModern/AppSlider/pageMeetly";
import PageWingle from "containers/AppModern/AppSlider/pageWingle";
import PageMiniMidiMaks from "containers/AppModern/AppSlider/pageMiniMidiMaks";
import PageStily from "containers/AppModern/AppSlider/pageStily";

import Features from "containers/AppModern/Features";
import DashboardFeatures from "containers/AppModern/Dashboard";
import ProductSlide from "containers/AppModern/ProductSlide";
import DesignedAndBuilt from "containers/AppModern/DesignedAndBuilt";
import PricingPolicy from "containers/AppModern/PricingPolicy";
import TeamPortfolio from "containers/AppModern/TeamPortfoilo";
import Testimonial from "containers/AppModern/Testimonial";
import Newsletter from "containers/AppModern/Newsletter";
import Footer from "containers/AppModern/Footer";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "containers/AppModern/appModern.style";

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>App Modern | A next js landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Features />
            {/* Pages */}
            <div>
              <PageEvet />
            </div>
            <div>
              <PageBeaticket />
            </div>
            <div>
              <PageFlow />
            </div>
            <div>
              <PageWingle />
            </div>
            <div>
              <PageMeetly />
            </div>
            <div>
              <PageStily />
            </div>
            <div>
              <PageMiniMidiMaks />
            </div>
            {/* <DashboardFeatures /> */}
            {/* <Testimonial /> */}
            <DesignedAndBuilt />
            <ProductSlide />
            {/* <PricingPolicy /> */}
            <TeamPortfolio />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default Main;
