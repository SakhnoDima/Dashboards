import styled from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: 2px solid black;
    border-radius: 8px;
    transition: 700ms;
    &:focus {
      border-color: #448aff;
    }
  }

  button {
    position: absolute;
    border: none;
    background-color: inherit;
    padding: 0;
    top: 5px;
    right: 8px;

    svg {
      width: 30px;
      height: 27px;
      cursor: pointer;
      transition: 500ms;
      &:hover {
        stroke: #448aff;
      }
    }
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border: 1px solid black;
    border-left: none;
    background-color: white;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    transition: 500ms;
    &:hover {
      background-color: darkgray;
      color: white;
    } */
  }
`;
