import React from "react";
import { StyledButton, Icon } from "./button.styles";

const Button = ({
  icon,
  bgColor,
  textColor,
  style,
  children,
  iconStyle,
  iconLeft,
  iconRight,
  iconAlt,
  width,
  borderRadius,
}) => {
  return (
    <StyledButton
      style={{
        ...style,
        color: textColor,
        backgroundColor: bgColor,
        width,
        borderRadius,
      }}
      iconLeft={iconLeft}
      iconRight={iconRight}
      icon={icon}
    >
      <div>
        {icon ? (
          <Icon style={{ ...iconStyle }} src={icon} alt={iconAlt} />
        ) : (
          <></>
        )}

        {children}
      </div>
    </StyledButton>
  );
};
export default Button;
