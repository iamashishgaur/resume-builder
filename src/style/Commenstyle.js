import styled from "styled-components";
export const ResumeMainContainer = styled.div`
  
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ResumeContainer = styled.div`
  box-shadow: 0 0.625rem 0.9375rem rgba(0, 0, 0, 0.1);
  height: auto;

  width: 21.625rem;
  height: 490px;
  border-radius: 8px;
  border: 1px solid gray;
  position: relative;
`;
// export const Button = styled.button`
//   border: none;
//   cursor: pointer;
//   display: none;
//   padding: 12px 16px;
//   background: #ee40a7;
//   border-radius: 8px;
//   & > a {
//     text-decoration: none;
//     font-size: 1rem;
//     color: #eee;
//   }
// `;
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "palevioletred" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#5b04f1")};
  font-size: 1em;
  display: flex;
  padding: 0.45em 1em;
  border: 2px solid #5b04f1;
  cursor: pointer;
  border-radius: 5px;
  & > a {
    text-decoration: none;
  }
  &:hover {
    background-color: #5b04f1;
    color: white;
    a {
      color: white;
    }
  }
`;
export const ResumesampleContainer = styled.div`
  width: 100%;

  height: auto;
`;
export const Resumewraper = styled.div`
  /* padding: 5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResumeBox = styled.div`
  border: 1.5px solid gray;
  width: 802px;
  height: 932px;
  /* padding: 3em 1.8em 1.8em; */
  border-radius: 10px;
  background-color: white;
`;
export const ResumeTitle = styled.div`
  h2 {
    font-size: 2rem;
    span {
      color: #38b6ff;
    }
  }
  & > span {
    display: flex;
    margin-top: 8px;
    & > p:nth-child(1) {
      margin-right: 50px;
    }
    & > p:nth-child(2) {
      margin-right: 100px;
    }
    & > p:nth-child(3) {
      margin-right: 50px;
      color: #38b6ff;
      text-decoration: underline;
    }

    & > p:nth-child(4) {
      margin-right: 100px;
      color: #38b6ff; /*skyblue*/
      text-decoration: underline;
    }
    & > p {
      font-size: 13px;
      color: #706f6f; /* gray*/
    }
  }
`;
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 3rem;
`;
export const DeatilsLeft = styled.div`
  /* border: 1.5px solid gray; */
  margin-top: 1.5rem;
  width: 50%;
  padding: 0 10px;
`;
export const SummaryFiels = styled.div`
  span {
    color: #38b6ff;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  & > p {
    margin-top: 1rem;
    color: #706f6f;
    line-height: 1.5rem;
  }
`;
export const EducationField = styled(SummaryFiels)`
  margin-top: 25px;

  & > div {
    margin-top: 1rem;
    & > p {
      color: #706f6f;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 1.5rem;
    }
    & > p:nth-child(2) {
      color: black;
      font-weight: 600;
    }
  }
`;
export const ExteraDetails = styled(EducationField)``;
export const CoadingTools = styled(EducationField)``;
export const CodeMangement = styled(EducationField)``;
export const Certificate = styled(EducationField)``;
export const DeatilsRight = styled.div`
  /* border: 1.5px solid gray; */
  width: 50%;
  padding: 0 10px;
  display:flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ProjectField = styled(SummaryFiels)`
  p {
    & > p {
      margin-top: 10px;
    }
  }
`;

export const ResumeHeaderTitle = styled.div`
  span {
    font-size: 3rem;
    font-weight: bold;
    /* color: #5b04f1; */
  }
  & > p {
    font-size: 1.3rem;
    margin-top: 1rem;
  }
`;


export const Projectcontainer = styled.div`
margin-top: 1.2rem;
`;
export const ProjectInfo = styled.div`
display:flex;
justify-content: space-between;

`;
export const ProjectTitle = styled.div``;
export const ProjectLink = styled.div``;
export const ProjectDescription = styled.div`
margin-top: 1.2rem;
&>p{
  margin-top: 1rem;
    color: #706f6f;
    line-height: 1.5rem;
}
`;

export const ExtraDetailsContainer = styled.div`

`