import styled from "styled-components";

export const StyledBtn = styled.button`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: large;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
  width: 200px;
  outline: none;
  color: black;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  transition: 700ms;
  &:hover {
    border-color: #448aff;
    color: #448aff;
    box-shadow: rgba(68, 138, 255, 0.4) -5px 5px,
      rgba(68, 138, 255, 0.3) -10px 10px, rgba(68, 138, 255, 0.2) -15px 15px,
      rgba(68, 138, 255, 0.1) -20px 20px, rgba(68, 138, 255, 0.05) -25px 25px;
  }
`;
