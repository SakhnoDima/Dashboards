import styled from "styled-components";

export const StyledBtn = styled.button`
  width: 200px;
  margin: 0 auto;
  outline: none;
  color: black;
  padding: 8px;
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: darkgray;
    color: white;
  }
`;
