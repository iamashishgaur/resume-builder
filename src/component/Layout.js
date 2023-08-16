import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`

  height: auto;

  // margin-top: 60px;
`;
const Layout = ({ children }) => {
  return (
    <>
      <AppContainer>{children}</AppContainer>
    </>
  );
};

export default Layout;
