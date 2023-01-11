import React from "react";
import styled, { keyframes } from "styled-components";

const enlarging = keyframes`

  0% {
    transform:scale(1,1) translate(-50%, -50%);
  }
  50% {
    transform:scale(1.02,1.02) translate(-50%, -50%);
  }
  100% {
    transform:scale(1,1) translate(-50%, -50%);
  }
`;

const Bubble = styled.div`
  z-index: -1;
  position: absolute;
  border-radius: 50%;
  background-image: linear-gradient(#4ef9fe, #0696ff);
  animation: ${enlarging} 5s infinite linear;
  display: flex;
  align-items: center;
  justify-content: center;
  &.first {
    top: 100%;
    left: -3%;
    height: 200px;
    width: 200px;
  }
  &.second {
    top: 100%;
    left: 108%;
    height: 500px;
    width: 500px;
  }
  &.third {
    top: 65%;
    left: 82%;
    height: 100px;
    width: 100px;
    div {
      height: 90%;
      width: 90%;
      background-color: black;
      border-radius: 50%;
    }
  }
  &.four {
    top: 450%;
    left: -3%;
    height: 500px;
    width: 500px;
    div {
      height: 95%;
      width: 95%;
      background-color: black;
      border-radius: 50%;
    }
  }
  &.five {
    top: 520%;
    left: 101%;
    height: 150px;
    width: 150px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const cicleFollow = () => {
  document.addEventListener("mousemove", function (e) {
    const circle = document.querySelectorAll(
      ".header__circle"
    ) as unknown as HTMLCollectionOf<HTMLElement>;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    circle[0].style.left = -mouseX / 250 + 82 + "%";
    circle[0].style.top = mouseY / 80 + 65 + "%";
  });
};

class bubbles extends React.Component {
  componentDidMount() {
    cicleFollow();
  }
  render() {
    return (
      <div>
        <Bubble className="first "></Bubble>
        <Bubble className="second "></Bubble>
        <Bubble className="third header__circle">
          <div></div>
        </Bubble>
        <Bubble className="four ">
          <div></div>
        </Bubble>
        <Bubble className="five "></Bubble>
      </div>
    );
  }
}

export default bubbles;
