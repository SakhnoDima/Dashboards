import styled from "styled-components";
import { TbMessage2 } from "react-icons/tb";

export const Box = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  button:nth-child(3n + 1) {
    &:hover {
      box-shadow: rgba(68, 138, 255, 0.4) -5px 5px,
        rgba(68, 138, 255, 0.3) -10px 10px, rgba(68, 138, 255, 0.2) -15px 15px,
        rgba(68, 138, 255, 0.1) -20px 20px, rgba(68, 138, 255, 0.05) -25px 25px;
    }
  }
  button:nth-child(3n + 3) {
    &:hover {
      box-shadow: rgba(68, 138, 255, 0.4) 5px 5px,
        rgba(68, 138, 255, 0.3) 10px 10px, rgba(68, 138, 255, 0.2) 15px 15px,
        rgba(68, 138, 255, 0.1) 20px 20px, rgba(68, 138, 255, 0.05) 25px 25px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: medium;
  font-weight: 500;
  line-height: 1.5;
  padding: 20px;
  cursor: pointer;
  background-color: white;
  border: none;
  border-radius: 8px;
  transition: 700ms;
  box-shadow: var(--shadow);

  &:hover {
    color: var(--color-first-accent);
    box-shadow: rgba(68, 138, 255, 0.4) 0px 5px,
      rgba(68, 138, 255, 0.3) 0px 10px, rgba(68, 138, 255, 0.2) 0px 15px,
      rgba(68, 138, 255, 0.1) 0px 20px, rgba(68, 138, 255, 0.05) 0px 25px;
  }

  @media (max-width: 1140px) {
    font-size: small;
  }
  @media (max-width: 768px) {
    font-size: x-small;
  }
`;

export const SvgIconMessage = styled(TbMessage2)`
  color: var(--color-first-accent);
  &:hover {
    box-shadow: none;
  }
`;
