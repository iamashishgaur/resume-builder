import React from "react";
import styled from "styled-components";
import { Button } from "../style/Commenstyle";

import SearchResumeCatgery from "./SearchResumeCatgery";
const ResumeSearchContainer = styled.div`
  margin: 1.5rem 0;
`;
const Resumesapmletitle = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
  }
`;
const ResumeSearch = styled.div`
  margin-top: 1.5rem;
  position: relative;

  input {
    width: 32%;
    height: 50px;
    padding: 10px;
    font-size: 1rem;
    outline: none;
    color: gray;
    border-radius: 6px;
    &:focus {
      border: 2px solid rgb(91, 4, 241);
    }
  }
`;
const SeButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 60%;
  height: 50px;
  font-size: 1rem;
  border-radius: 0 6px 6px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 20px;
  background: rgb(91, 4, 241);
  color: white;
`;
const Resumesearch = () => {
  return (
    <>
      <ResumeSearchContainer>
        <Resumesapmletitle>
          <h1>Search Resume Sample</h1>
          <ResumeSearch>
            <input type="text" placeholder="search resume sample" />
            <SeButton>Search</SeButton>
          </ResumeSearch>
        </Resumesapmletitle>
      </ResumeSearchContainer>
      <SearchResumeCatgery />
    </>
  );
};

export default Resumesearch;
