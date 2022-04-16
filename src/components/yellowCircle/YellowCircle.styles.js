import styled from "styled-components";

export const YellowCircleContainer = styled("div")`
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#00B4AE"};
  border-radius: 50%;
  height: ${({ size }) => (size ? size : "#1rem")};
  width: ${({ size }) => (size ? size : "#1rem")};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "0")};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0")};
`;
