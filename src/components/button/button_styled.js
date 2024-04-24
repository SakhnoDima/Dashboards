import styled from "styled-components";

export const StyledBtn = styled.button`
  width: 200px;
  margin: 0 auto;
  outline: none;
  color: black;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  transition: 500ms;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;
