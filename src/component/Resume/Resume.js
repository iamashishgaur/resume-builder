import React, { useState } from "react";
import { ResumeContainer, Button } from "../../style/Commenstyle";
import { Link } from "react-router-dom";
import demoimg from "../../assets/demoresmume.jpg";
import styled from "styled-components";

const ImageContainer = styled.div`
  img {
    border-radius: 8px;
    width: 21.5rem;
    height: auto;
  }
`;
const RButton = styled(Button)`
  position: absolute;
  top: 45%;
  left: 25%;
  padding: 12px 30px;
  background-color: #5b04f1;
  a {
    color: white;
  }
`;
const Resume = () => {
  const [style, setStyle] = useState({ display: "none" });
  return (
    <>
      <ResumeContainer
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <ImageContainer>
          <img src={demoimg} alt="" />
        </ImageContainer>

        <RButton style={style}>
          <Link to="/resumeeditplayground">
            <span>Use This Template</span>
          </Link>
        </RButton>
      </ResumeContainer>
    </>
  );
};

export default Resume;
