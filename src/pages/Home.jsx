import React from "react";
import HeroBanner from "../component/HeroBanner";
import styled from "styled-components";
import Layout from "../component/Layout";
import DemoResume from "../component/DemoResume";
import ResumeCategery from "../component/ResumeCategery";
import HighlightCresume from "../component/HighlightCresume";
import PDF from "../pdf/demo";
const HomeContainer = styled.div`
  /* height: 1000px; */
`;
const Home = () => {
  return (
    <>
      <Layout>
        <HomeContainer>
          <HeroBanner />
          <DemoResume/>
          <ResumeCategery/>
          <HighlightCresume/>
          {/* <PDF/> */}
        </HomeContainer>
      </Layout>
    </>
  );
};

export default Home;
