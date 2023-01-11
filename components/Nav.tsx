import React from "react";
import Image from "next/image";

import styled from "styled-components";

import logoImg from "./assets/logo.png";

const WrapperNav = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 20px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12%;
`;

const Logo = styled(Image)`
  height: 45px;
  width: 45px;
`;

const Hamb = styled.div`
  height: 30px;
  width: 30px;
  .first {
    background-color: white;
    width: 100%;
    height: 6px;
    border-radius: 4px;
  }
  .second {
    background-color: white;
    margin-top: 5px;
    margin-left: 40%;
    width: 60%;
    height: 6px;
    border-radius: 4px;
  }
`;

class Nav extends React.Component {
  render() {
    return (
      <WrapperNav>
        <Logo src={logoImg} alt="logo" />
        <Hamb>
          <div className="first"></div>
          <div className="second"></div>
        </Hamb>
      </WrapperNav>
    );
  }
}

export default Nav;
