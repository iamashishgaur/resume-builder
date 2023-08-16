import React from "react";
import styled from "styled-components";
import { Button, ResumeHeaderTitle } from "../style/Commenstyle";
import { ResumeCategeryData } from "../data/ResumeCategeryData";
const ResumeCategeryContainer = styled.div`
  text-align: center;
  padding-top: 7.5rem;
`;

const RCTitle = styled(ResumeHeaderTitle)`
 /* width:90%; */
 width:60rem;
 margin:auto;
  &>span{
    color: #2d2d2d;
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 120%;
    margin: 0 auto 0.5rem;
    max-width: 57.875rem;
  }
  & > p {
    color: #2d2d2d;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 140%;
    margin:1.5rem  auto;
    max-width: 30.5rem;
  }
`;
const CategaryContainer = styled.div`
  display: flex;
  /* width: 60%; */
  padding: 0 10rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2.5rem; ;
`;
const RCButton = styled.div`
  background: unset;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 1.875rem;
  color: #2d2d2d;
  cursor: pointer;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 150%;
  margin: 0 0.375rem 0.625rem;
  padding: 0.6875rem 1.5rem;
  text-decoration: none;
  &:hover {
    border: 2px solid rgb(91, 4, 241);
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

const ResumeCategery = () => {
  return (
    <>
      <ResumeCategeryContainer>
        <RCTitle>
          <span>
            Get inspired by resume samples from professional resume experts
          </span>
          <p>
            Search by job title to find resumes from resume experts that can
            inspire your own resume creation.
          </p>
        </RCTitle>
        <CategaryContainer>
          {ResumeCategeryData.map((item, index) => {
            return (
              <a href={item.categarylink}>
                <RCButton>{item.categarytitle}</RCButton>
              </a>
            );
          })}
        </CategaryContainer>
        <EXBContainer>
          <a href="/resume">
            <EXButton>Explore All samples</EXButton>
          </a>
        </EXBContainer>
      </ResumeCategeryContainer>
    </>
  );
};

export default ResumeCategery;
