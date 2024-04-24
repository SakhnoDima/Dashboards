import React from "react";
import { StyledBtn } from "./button_styled";

const Button = ({ onClick, children }) => {
  return (
    <StyledBtn type="button" onClick={onClick}>
      {children}
    </StyledBtn>
  );
};

export default Button;
