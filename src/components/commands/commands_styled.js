import styled from "styled-components";

export const Box = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const Button = styled.button`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 8px;
  cursor: pointer;
  background-color: inherit;
  border: 1px solid black;
  border-radius: 8px;
  transition: 500ms;

  &:hover {
    background-color: darkgray;
    color: white;
  }
`;
