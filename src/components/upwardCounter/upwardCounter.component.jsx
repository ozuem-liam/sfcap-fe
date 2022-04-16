import React, { useState, useEffect } from "react";
import { UpwardCounterContainer } from "./upwardCounter.styles";
import { BiPound as PoundSign } from "react-icons/bi";

const UpwardCounter = ({
  beforeSign,
  afterSign,
  margin,
  padding,
  textColor,
  fontSize,
  increaseBy,
  finalNumber,
  ...otherProps
}) => {
  const [count, setCount] = useState(finalNumber - 3000);
  /*const [position, setPosition] = useState(null);*/

  /* const handleScrollPosition = () => {
     const pageOffsets = window.pageYOffset;
     window.addEventListener("scroll", pageOffsets);

   };*/

  useEffect(() => {
    const number = setInterval(() => {
      setCount(
        count < finalNumber ? count + (increaseBy ? increaseBy : 1) : count
      );
      /* Note by default this counter increases by 1, you can change the default increase value by passing props through the "increaseBy" props. Hence if you want it to count down simply set increaseBy to -1, here it will increase by -1 which means it counts down.*/
    }, 1 * 10 ** -(100 * 500));
    return () => clearInterval(number);
  });

  return (
    <UpwardCounterContainer
      fontSize={fontSize}
      textColor={textColor}
      margin={margin}
      padding={padding}
    >
      <span>
        {beforeSign ? <PoundSign /> : null}
        {count}
        {afterSign ? <strong>+</strong> : null}
      </span>
    </UpwardCounterContainer>
  );
};

export default UpwardCounter;
