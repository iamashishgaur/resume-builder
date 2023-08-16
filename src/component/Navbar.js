import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Commenstyle";
import { GiBookAura } from "react-icons/gi";
const NavbarContainer = styled.div`
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 9;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
const Header = styled.div`
  padding: 0 5rem;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.div`
  color: #5b04f1;
  cursor: pointer;
  & > h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    & > svg {
      font-size: 2.2rem;
    }
  }
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 50px;
  
  a {
    text-decoration: none;
    font-size: 1rem;
    color: black;
    font-weight: 400;
  }
`;
const Navbar = () => {
  const nav = useNavigate();
  return (
    <>
      <NavbarContainer>
        <Header>
          <NavLogo onClick={() => nav("/")}>
            <h2>
              <GiBookAura /> Make My Cv
            </h2>
          </NavLogo>
          <NavMenu>
            <li>
              <Link to="/">Home</Link>
            
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/about">Cover Latter</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <Button>Get Start</Button>
          </NavMenu>
        </Header>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
