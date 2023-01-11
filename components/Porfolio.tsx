import React from "react";
import Image from "next/image";

import styled from "styled-components";

import Edumat from "./assets/edumat.png";
import Motion from "./assets/motion.png";
import Car from "./assets/car.gif";

const WrapperPorfolio = styled.section`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 90vw;
  overflow-x: hidden;
  h2 {
    font-size: 55px;
    text-align: center;
    background: -webkit-linear-gradient(#4ef9fe, #0696ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const BoxPorfolio = styled.div`
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90%;
`;

const StyledImageWrapper = styled.div`
  height: 350px;
  width: 450px;
  z-index: 2;
  border: 1px solid gray;
  overflow: hidden;
  margin-bottom: 25px;
  @media (max-width: 800px) {
    width: 400px;
  }

  &:hover {
    margin: 15px 15px 20px 0;
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: auto;
  z-index: 2;
  @media (max-width: 800px) {
    width: 400px;
  }
`;

const TextBox = styled.div`
  margin-left: 30px;
  p {
    color: #ffffff80;
    font-size: 22px;
  }
`;
const Tittle = styled.h3`
  text-align: left;
  margin: 0;
  padding: 0;
  font-size: 45px;
  background: -webkit-linear-gradient(#4ef9fe, #0696ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Line = styled.div`
  margin: 5px 0;
  height: 3px;
  width: 80px;
  background-color: #ffffff80;

  div {
    height: 100%;
    width: 0%;
    background-color: #1aaffc;
  }
`;

const PortfolioItemsWrapper = styled.div`
  position: relative;
  margin: 40px 50px;
  p {
    text-align: left;
  }

  &.right {
    margin-top: 150px;
  }
  &:hover ${Line} {
    div {
      width: 100%;
    }
  }
  &:hover ${TextBox} {
    p {
      width: 100%;
      color: #1aaffc;
    }
  }
`;

const PortfolioItems = [
  {
    Img: Edumat,
    Tittle: "Edumat",
    Tech: "React",
    Date: "2020",
    Href: "https://edumat-dev.netlify.app/#/",
  },
  {
    Img: Car,
    Tittle: "Car AI",
    Tech: "React",
    Date: "2020",
    Href: "car-network.netlify.app",
  },
  {
    Img: "https://user-images.githubusercontent.com/48288156/209471495-7dd99c9d-1154-45ec-a86f-d8d170096f72.gif",
    Tittle: "Blockchain",
    Tech: "Typescript",
    Date: "2022",
    Href: "https://github.com/ZTKpro/BlockChain",
  },
  {
    Img: Motion,
    Tittle: "Emotion Detection",
    Tech: "React",
    Date: "2020",
    Href: "https://motion-detection-ds.netlify.app",
  },
];

class Portfolio extends React.Component {
  render() {
    return (
      <WrapperPorfolio>
        <h2>Portfolio</h2>
        <BoxPorfolio>
          {PortfolioItems.map((item, i) => (
            <a href={item.Href} target="_blank" rel="noreferrer" key={i}>
              <PortfolioItemsWrapper
                key={i}
                className={i % 2 == 0 ? "" : "right"}
              >
                <StyledImageWrapper>
                  <StyledImage
                    width={450}
                    height={450}
                    src={item.Img}
                    alt={item.Tittle}
                    unoptimized={true}
                  />
                </StyledImageWrapper>
                <TextBox>
                  <Tittle>{item.Tittle}</Tittle>
                  <Line>
                    <div></div>
                  </Line>
                  <p>
                    {item.Tech} {item.Date}
                  </p>
                </TextBox>
              </PortfolioItemsWrapper>
            </a>
          ))}
        </BoxPorfolio>
      </WrapperPorfolio>
    );
  }
}

export default Portfolio;
