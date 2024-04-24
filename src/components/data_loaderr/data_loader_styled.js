import styled from "styled-components";

export const MainBox = styled.div`
  max-width: 408px;
  margin: 0 auto 8px;
  display: flex;
  gap: 8px;
`;

export const DisabledInput = styled.input`
  display: none;
  opacity: 0;
  visibility: hidden;
`;

export const FaceInput = styled.label`
  display: flex;
  justify-content: center;
  font-size: large;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  width: 200px;
  outline: none;
  color: black;
  padding: 8px 0px;
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
