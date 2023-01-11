import React from "react";
import Image from "next/image";

import styled from "styled-components";

import ReactIcon from "./assets/ReactIcon.svg";
import NativeIcon from "./assets/nativeIcon.svg";
import GatsbyIcon from "./assets/gatsbyIcon.svg";
import GraphQlIcon from "./assets/graphqlcon.svg";
import TsIcon from "./assets/tsIcon.svg";
import NodeIcon from "./assets/nodeIcon.svg";

const WrapperTech = styled.section`
  margin-top: 200px;
  h2 {
    font-size: 55px;
    text-align: center;
    background: -webkit-linear-gradient(#4ef9fe, #0696ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 1000px) {
      font-size: 35px;
    }
  }
`;

const TechContener = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  height: 100%;
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
  div {
    margin: 60px 90px;

    h4 {
      font-size: 28px;
      white-space: nowrap;
    }
  }
  @media (max-width: 800px) {
    div {
      margin: 50px 60px;
    }
  }
`;

const Logo = styled(Image)`
  height: 130px;
  width: auto;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    height: 100px;
  }
`;

const stack = [
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "React Native",
    icon: NativeIcon,
  },
  {
    name: "Gatsby",
    icon: GatsbyIcon,
  },
  {
    name: "GraphQl",
    icon: GraphQlIcon,
  },
  {
    name: "TypeScript",
    icon: TsIcon,
  },
  {
    name: "Node",
    icon: NodeIcon,
  },
];

class Tech extends React.Component {
  render() {
    return (
      <WrapperTech>
        <h2>Technologies</h2>
        <TechContener>
          {stack.map((item) => {
            return (
              <div key={item.name}>
                <Logo src={item.icon} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
            );
          })}
        </TechContener>
      </WrapperTech>
    );
  }
}

export default Tech;
