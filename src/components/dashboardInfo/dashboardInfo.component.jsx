import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  position: relative;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
  border-radius: 5px 5px 0 0;
  margin-bottom: 4rem;
  height: 140px;
  &::after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: 0;
    height: 40px;
    width: 100%;
    border-radius: 0 0 5px 5px;
    background-color: ${({ afterBgColor }) =>
      afterBgColor ? afterBgColor : ""};
  }
  p {
    span {
      display: block;
      color: white;
      text-align: center;
      &:first-child {
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }
      &:last-child {
        margin-bottom: 1rem;
        font-size: 1rem;
        text-transform: uppercase;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 22%;
  }
`;

const DashboardInfoComponent = ({ amount, info, bgColor, afterBgColor }) => {
  return (
    <Container bgColor={bgColor} afterBgColor={afterBgColor}>
      <p>
        <span>£{amount}</span>
        <span>{info}</span>
      </p>
    </Container>
  );
};

export default DashboardInfoComponent;
