import React from "react";
import { StyledBtn } from "./button_styled";

const Button = ({ onClick, children, disabled = false }) => {
  return (
    <StyledBtn disabled={disabled} type="button" onClick={onClick}>
      {children}
    </StyledBtn>
  );
};

export default Button;
