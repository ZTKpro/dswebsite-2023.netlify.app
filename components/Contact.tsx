import React from "react";
import styled from "styled-components";

import Facebook from "./assets/fb.png";
import Linkedin from "./assets/linkedin.png";
import Github from "./assets/github.png";

const WorkWrapper = styled.div`
  width: 100%;
  margin: 150px auto;
  margin-bottom: 150px;
  h3 {
    font-size: 80px;
    background: -webkit-linear-gradient(#4ef9fe, #0696ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    margin-top: 5px;
    font-size: 50px;
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 35px;
    }
    p {
      font-size: 22px;
    }
  }
`;

const IconBox = styled.div`
  img {
    opacity: 0.9;
    margin: 35px 20px;
    height: 60px;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
  @media (max-width: 800px) {
    img {
      margin: 10px;
      height: 40px;
    }
  }
`;

class WorkTogether extends React.Component {
  render() {
    return (
      <WorkWrapper>
        <h3>Work together</h3>
        <p>Find me on my social media</p>
        <IconBox>
          <a
            href="https://www.facebook.com/profile.php?id=100007840545965"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/dszmurlo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin}></img>{" "}
          </a>
          <a href="https://github.com/ZTKpro" target="_blank" rel="noreferrer">
            <img src={Github}></img>{" "}
          </a>
        </IconBox>
      </WorkWrapper>
    );
  }
}

export default WorkTogether;
