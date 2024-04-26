import styled from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    padding: 16px 40px 16px 10px;
    outline: none;
    border: 2px solid white;
    border-radius: 8px;
    transition: 700ms;
    box-shadow: var(--shadow);

    &:focus {
      border-color: #448aff;
    }
    &:hover {
      box-shadow: rgba(68, 138, 255, 0.15) 0px 5px 15px,
        rgba(68, 138, 255, 0.05) 0px 5px 10px;
    }
  }

  button {
    position: absolute;
    border: none;
    background-color: inherit;
    padding: 0;
    top: 10px;
    right: 8px;

    svg {
      width: 30px;
      height: 27px;
      cursor: pointer;
      transition: 500ms;
      color: var(--color-first-accent);
      &:hover {
        color: var(--color-second-accent);
      }
    }
  }
`;
