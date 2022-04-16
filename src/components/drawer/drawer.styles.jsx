import styled from "styled-components";

export const DrawerContainer = styled.nav`
  background-color: #00B4AE;
  width: 100px;
  max-width: 100px;
  min-height: 100vh;
  padding: 0.5rem 0 0;
  transition: all 0.5s;
  &::-webkit-scrollbar {
    display: none;
  }
  &.display {
    display: block;
  }
  &.hidden {
    transform: ${({ admin }) =>
      admin ? "translateX(-90px)" : "translateX(-95px)"};
  }

  div.profile {
    padding-bottom: 1rem;
    border-bottom: solid 1px #f4f4f4;
    img.profile {
      width: 40px;
      height: 40px;
      padding: 5px;
      border-radius: 50%;
      border: solid 2px #f4f4f4;
      margin: 0 auto;
      display: block;
    }
    p {
      font-size: 1rem;
      text-align: center;
      color: #fff;
    }
    img.verified {
      width: 40px;
      margin: 5px auto;
      display: block;
    }
  }

  div.button-container {
    padding: 1rem 0 0;
  }

  div.extras {
    background-color: #555;
    padding: 0.5rem 0;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  width: 100%;
  max-width: 95px;
  margin: 0 auto;
  display: block;
  color: #fff;
  border: none;
  text-align: center;
  padding: ${({ last }) => (last ? "1rem 0.5rem" : "10px 0.5rem")};

  border-top: ${({ last }) => (last ? "solid 1px #f4f4f4" : "")};
  &:hover {
    background-color: #fff;
    div {
      span {
        color: ${({ isExtra }) => (isExtra ? "#555" : "#00B4AE")};
      }
      svg {
        fill: ${({ isExtra }) => (isExtra ? "#555" : "#00B4AE")};
      }
    }
  }
  &:focus {
    outline: none;
  }
  div {
    svg {
      margin: 0 auto 5px;
      width: 30px;
      height: 30px;
      fill: #fff;
      display: block;
      &.arr {
        width: 10px;
        height: 10px;
      }
    }
    img {
      width: 10px;
      margin: 0 auto 5px;
    }
    span {
      display: block;
      margin-bottom: 5px;
    }
  }
`;
