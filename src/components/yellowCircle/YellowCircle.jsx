import React from "react";
import { YellowCircleContainer } from "./YellowCircle.styles";

const YellowCircle = ({
  marginRight,
  marginLeft,
  backgroundColor,
  size,
  ...otherProps
}) => {
  return (
    <YellowCircleContainer
      size={size}
      backgroundColor={backgroundColor}
      marginRight={marginRight}
      marginLeft={marginLeft}
    ></YellowCircleContainer>
  );
};

export default YellowCircle;
