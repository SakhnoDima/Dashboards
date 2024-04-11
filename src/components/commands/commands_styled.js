import styled from "styled-components";

export const Box = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const Button = styled.button`
  padding: 8px;
  cursor: pointer;
  background-color: inherit;
  border: 2px solid black;
  border-radius: 8px;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;
