import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  font-size: 2rem;
  margin-top:1rem;
  & > svg {
    cursor: pointer;
  }
`;
const Social = () => {
  return (
    <>
      <SocialContainer>
        <BsFacebook />
        <AiFillTwitterCircle />
        <AiOutlineInstagram />
        <AiFillLinkedin />
      </SocialContainer>
    </>
  );
};

export default Social;
