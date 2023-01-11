import React from "react";
import styled from "styled-components";

const StyledHeader = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 20%;
  h2 {
    font-size: 40px;
    text-align: left;
    max-width: 660px;
    @media (max-width: 1200px) {
      font-size: 23px;
    }
  }
  span {
    background: -webkit-linear-gradient(#4ef9fe, #0696ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <h2>
          Hi, my name is <span>Damian Szmurło</span> I Fullstack developer
        </h2>
      </StyledHeader>
    );
  }
}

export default Header;
