import React from "react";

import {
  ProjectField,
  Projectcontainer,
  ProjectInfo,
  ProjectTitle,
  ProjectLink,
  ProjectDescription,
} from "../style/Commenstyle";

const Project = () => {
  return (
    <>
      <ProjectField>
        <span>Projects</span>
        <Projectcontainer>
          <ProjectInfo>
            <ProjectTitle>Project Title</ProjectTitle>
            <ProjectLink>
              <a href="/">Project Link</a>
            </ProjectLink>
          </ProjectInfo>
          <ProjectDescription>
            <p>
              Movieapp - SKYmovie | FEB, 2023 React Movie App is a web
              application built using the React framework that allows users to
              browse and search for movies. The app retrieves movie data from
              the MovieDB API and displays it in a user-friendly interface.
              Overall, the React Movie App provides users with an easy and
              efficient way to search for and discover new movies to watch.
            </p>
          </ProjectDescription>
        </Projectcontainer>
      </ProjectField>
    </>
  );
};

export default Project;
