import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import Resumesample from "../pages/Resumesample";

const ResumeEditPlaygroundContainer = styled.div`
  width: 100%;
  border: 2px solid red;
  display: flex;
  padding: 20px;
  gap: 10px;
`;
const EditinputResume = styled.div`
  width: 55%;
  height: 100vh;
  border: 1px solid orange;
`;
const Resumepriview = styled.div`
  width: 45%;
  height: 100vh;
  border: 1px solid blue;
`;
const ResumeEditPlayground = () => {
  return (
    <>
      <Layout>
        <ResumeEditPlaygroundContainer>
          <EditinputResume>

          </EditinputResume>
          <Resumepriview>
              <Resumesample/>
          </Resumepriview>
        </ResumeEditPlaygroundContainer>
      </Layout>
    </>
  );
};
export default ResumeEditPlayground;
