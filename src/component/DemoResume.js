import React from "react";
import styled from "styled-components";
import { ResumeHeaderTitle } from "../style/Commenstyle";
import Resume from "./Resume/Resume";
const DemoResumeContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3rem;
  padding: 3rem 0;
  background: #b0dff54f;
`;
const ResumeTitle = styled(ResumeHeaderTitle)`
  text-align: center;
  & > p {
    font-size: 1rem;
    margin-top: 1rem;
    color: #2d2d2d;
    letter-spacing: 1px;
  }
`;

const ResumeTemplatecontainer = styled.div`
  display: flex;
  margin-top:3rem;
  gap:50px;
  justify-content: center;
`;
const DemoResume = () => {
  return (
    <>
      <DemoResumeContainer>
        <ResumeTitle>
          <span>Every detail on your resume, built to perfection</span>
          <p>
            Highlight the academic background that makes a resume choose any
            template create a professional resume.
          </p>
        </ResumeTitle>
        <ResumeTemplatecontainer>
          <Resume />
          <Resume />
          <Resume />
        </ResumeTemplatecontainer>
      </DemoResumeContainer>
    </>
  );
};

export default DemoResume;
