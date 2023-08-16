import React from "react";
import ResumeDemo from "../component/Resume/Resume";
import { ResumeMainContainer } from "../style/Commenstyle";
import Layout from "../component/Layout";
import styled from "styled-components";
import Resumesearch from "../component/Resumesearch";

const SearchResume = styled.div`
  width: 100%;
  height: auto;
  
  background: #b0dff54f;
`;
const Playgroundemoreume = styled.div`
  padding: 2rem 4rem;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

const Resume = () => {
  return (
    <>
      <Layout>
        <ResumeMainContainer>
          <SearchResume>
            <Resumesearch/>
          </SearchResume>
          <Playgroundemoreume>
            <ResumeDemo />
            <ResumeDemo />
            <ResumeDemo />
            <ResumeDemo />
            <ResumeDemo />
            <ResumeDemo />
          </Playgroundemoreume>
        </ResumeMainContainer>
      </Layout>
    </>
  );
};

export default Resume;
