import React from "react";
import styled from "styled-components";
import { GiBookAura } from "react-icons/gi";

const SearchCategory = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;
const Clist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 30px;
  & > svg {
    font-size: 1.5rem;
  }
  li a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    /* text-decoration:underline; */
    border-bottom: 1.5px solid gray;
  }
`;
const SearchResumeCatgery = () => {
  return (
    <>
      <SearchCategory>
        <Clist>
          <GiBookAura />{" "}
          <li className="Activelink">
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Accountant</a>
          </li>
          <li>
            <a href="/">Bussiness</a>
          </li>
          <li>
            <a href="/">Cashier</a>
          </li>
          <li>
            <a href="/">Engineer </a>
          </li>
          <li>
            <a href="/">Designer</a>
          </li>
          <li>
            <a href="/">Developer</a>
          </li>
          <li>
            <a href="/">Manager</a>
          </li>
          <li>
            <a href="/">Nurse</a>
          </li>
          <li>
            <a href="/">Intren</a>
          </li>
          <li>
            <a href="/">Teacher</a>
          </li>
          <GiBookAura />
        </Clist>
      </SearchCategory>
    </>
  );
};

export default SearchResumeCatgery;
