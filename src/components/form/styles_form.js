import styled from "styled-components";
import { TbMessage2 } from "react-icons/tb";

export const StyledForm = styled.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    padding: 16px 40px 16px 35px;
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
    @media (max-width: 1140px) {
      padding: 8px 25px 8px 28px;
    }
    @media (max-width: 768px) {
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
    @media (max-width: 1140px) {
      top: 9px;
      svg {
        width: 20px;
        height: 17px;
      }
    }
    @media (max-width: 768px) {
    }
  }
`;

export const MessageIconInput = styled(TbMessage2)`
  position: absolute;
  top: 17px;
  left: 17px;
  color: var(--color-first-accent);

  @media (max-width: 1140px) {
    top: 9px;
    left: 10px;
  }
`;
