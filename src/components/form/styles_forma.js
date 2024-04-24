import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid black;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: none;
  }

  button {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
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
    }
  }
`;
