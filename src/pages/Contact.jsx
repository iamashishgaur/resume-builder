import React from "react";
import Layout from "../component/Layout";
import styled from "styled-components";

const ContactContainer = styled.div`
  /* width: 100%; */
  height: 100vh;
  padding: 2rem 5rem;
`;
const Contactboxcontainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const Contactbox = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 8px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
`;
const ContactFromContainer = styled.div`
  /* width:100%; */
  height: 500px;
  border: 1px solid red;
  margin-top: 1rem;
  display: flex;
  padding: 1rem;
`;
const ContactImg = styled.div`
  width: 50%;
  border: 1px solid red;
`;
const ContactForm = styled.div`
  width: 45%;
  border: 1px solid red;
`;
const Form = styled.div``;

const Contact = () => {
  return (
    <Layout>
      <ContactContainer>
        <Contactboxcontainer>
          <Contactbox>Email</Contactbox>
          <Contactbox>Number</Contactbox>
          <Contactbox>112</Contactbox>
        </Contactboxcontainer>
        <ContactFromContainer>
          <ContactImg></ContactImg>
          <ContactForm>
            <Form>
              <input type="text" />
            </Form>
          </ContactForm>
        </ContactFromContainer>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
