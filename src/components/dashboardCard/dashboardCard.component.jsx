import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px #ccc;
  border-top: solid 2px #00b4ae;
  border-radius: 5px;
  margin: 0 1rem 6rem;
  ${({ personal }) =>
    personal
      ? `
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto 6rem;
  }
  `
      : ""}
`;

const DashboardCard = ({ children, className, personal }) => {
  return <Container className={className}>{children}</Container>;
};

export default DashboardCard;
