import React from "react";
import { StyledBtn } from "./button_styled";

const Button = ({ onClick }) => {
  return (
    <StyledBtn type="button" onClick={onClick}>
      Filter
    </StyledBtn>
  );
};

export default Button;
