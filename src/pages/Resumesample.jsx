import React from "react";
import Layout from "../component/Layout";
import {
  ResumesampleContainer,
  Resumewraper,
  DetailsContainer,
  ResumeBox,
  DeatilsLeft,
  DeatilsRight,
  ResumeTitle,
  SummaryFiels,
  EducationField,
  ExteraDetails,
  ExtraDetailsContainer,
} from "../style/Commenstyle";
import styled from "styled-components";
import Project from "../component/Project";

const PersonalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  position: relative;
`;
const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
const SocialInfo = styled(ContactInfo)`
  position: absolute;
  left: 50%;
`;

const Resumesample = () => {
  return (
    <>
      <Layout>
        <ResumesampleContainer>
          <Resumewraper>
            <ResumeBox>
              <ResumeTitle>
                <h2>
                  Persone Name <span> / Frontend Developer</span>
                </h2>
                <PersonalInfo>
                  <ContactInfo>
                    <p>resume@gmail.com</p> <p>+91 7755668899</p>
                  </ContactInfo>
                  <SocialInfo>
                    <p>Git</p>
                    <p>Linkdin</p>
                    <p>Facebook</p>
                  </SocialInfo>
                </PersonalInfo>
              </ResumeTitle>
              <DetailsContainer>
                <DeatilsLeft>
                  <SummaryFiels>
                    <span>Summary</span>
                    <p>
                      As a frontend developer in creating user-friendly and
                      responsive web interfaces. HTML, CSS, Javascript, and
                      React JS. Adept at collaborating with Cross-functional
                      teams to deliver user- Focused solutions that meet
                      business goals.
                    </p>
                  </SummaryFiels>
                  <EducationField>
                    <span>Education</span>
                    <div>
                      <p>Collage Name</p>
                      <p>Courses Name</p>
                      <p>2021 - 2023</p>
                    </div>
                    <div>
                      <p>School Name</p>
                      <p>Courses Name</p>
                      <p>2020 - 2022</p>
                    </div>
                  </EducationField>
                  <ExteraDetails>
                    <span>Experince Details</span>
                    <ExtraDetailsContainer>
                      <h4>Company / Organiation</h4>
                      <p>Position</p>
                      <p>Duration</p>
                      <p>Description</p>
                    </ExtraDetailsContainer>
                  </ExteraDetails>
                  <ExteraDetails>
                    <span>Extra Details</span>
                    <ExtraDetailsContainer>
                      <p>Position</p>
                      <p>Duration</p>
                      <p>Description</p>
                    </ExtraDetailsContainer>
                  </ExteraDetails>
                  
                </DeatilsLeft>
                <DeatilsRight>
                <ExteraDetails>
                    <span>Interst</span>
                    <ExtraDetailsContainer>
                      <p>Position</p>
                      <p>Duration</p>
                      <p>Description</p>
                    </ExtraDetailsContainer>
                  </ExteraDetails>
                  <Project />
                  <Project />
                  
                </DeatilsRight>
              </DetailsContainer>
            </ResumeBox>
          </Resumewraper>
        </ResumesampleContainer>
      </Layout>
    </>
  );
};

export default Resumesample;
