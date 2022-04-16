import styled from "styled-components";

export const UpwardCounterContainer = styled("div")`
  span {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5rem")};
    color: ${({ color }) => (color ? color : "#00B4AE")};
    padding: ${({ padding }) => (padding ? padding : "0.2rem")};
    margin: ${({ margin }) => (margin ? margin : "0")};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 900px) {
    span {
      font-size: 3rem;
    }
  }
`;