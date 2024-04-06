import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    padding: 8px;
    outline: none;
    border: 2px solid black;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: none;
  }

  button {
    border: 2px solid black;
    border-left: none;
    background-color: inherit;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: darkgray;
      color: white;
    }
  }
`;
