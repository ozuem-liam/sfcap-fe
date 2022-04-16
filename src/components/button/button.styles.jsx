import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  font-size: 1rem;
  padding: 10px;
  background-color: greenyellow;
  width: 80px;
  text-align: center;
  div {
    display: ${({ icon }) => (icon ? "flex" : "")};
    flex-direction: ${({ iconLeft, iconRight }) =>
      iconLeft ? "row" : iconRight ? "row-reverse" : ""};
    justify-content: space-between;
    align-items: center;
  }
`;

export const Icon = styled.img`
  width: 1rem;
`;
