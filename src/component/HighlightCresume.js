import React from "react";
import styled from "styled-components";
import { Button, ResumeHeaderTitle } from "../style/Commenstyle";
const DemoResumeContainer = styled.div`
  height: auto;
  margin-top: 3rem;
  padding: 3rem 10rem;
  background: #b0dff54f;
  text-align: center;
`;
const ResumeTitle = styled(ResumeHeaderTitle)`
  /* width: 60rem; */
  & > p {
    font-size: 1rem;
    margin-top: 1rem;
    color: #2d2d2d;
    letter-spacing: 1px;
  }
`;

const EXBContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const EXButton = styled(Button)`
  margin: 4rem 0;
  border: 2px solid rgba(0, 0, 0, 0.3);
  padding: 20px 50px;
  border-radius: 8px;
  font-size: 1rem;
  background: #440ccc;
  color: white;
`;
const HighlightCresume = () => {
  return (
    <>
      <DemoResumeContainer>
        <ResumeTitle>
          <span>
            Start building your resume today, land your dream job tomorrow
          </span>
        </ResumeTitle>
        <EXBContainer>
          <a href="/resume">
            <EXButton>Go To My Resume</EXButton>
          </a>
        </EXBContainer>
      </DemoResumeContainer>
    </>
  );
};

export default HighlightCresume;
