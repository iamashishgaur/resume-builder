import React from "react";
import styled from "styled-components";
import { Button, ResumeHeaderTitle } from "../style/Commenstyle";
import demoimg from "../assets/demoresmume.jpg";
import { useNavigate } from "react-router-dom";

const HerobannerContainer = styled.div`
  height: calc(100vh - 60px);
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
`;
const BannerLeft = styled.div`
  width: 45%;
  margin-top: 10rem;
  padding: 50px;
  
`;

const BannerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 650px;
  box-shadow: 0 0.625rem 0.9375rem rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 100%;
  }
`;
const HeroBanner = () => {
  const nav = useNavigate();
  return (
    <>
      <HerobannerContainer>
        <BannerLeft>
          <ResumeHeaderTitle>
            <span>Build a professional resume for free</span>
            <p>
              Create your resume easily with our free builder and professional
              templates.
            </p>
          </ResumeHeaderTitle>
          <Button
            style={{ marginTop: "1.5rem", padding: "15px 30px" }}
            onClick={() => {
              nav("/resume");
            }}
          >
            Create My Resume 
          </Button>
        </BannerLeft>
        <BannerRight>
          <ImageContainer>
            <img src={demoimg} alt="" />
          </ImageContainer>
        </BannerRight>
      </HerobannerContainer>
    </>
  );
};

export default HeroBanner;
