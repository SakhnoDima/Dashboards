import styled from "styled-components";

export const StyledBtn = styled.button`
  color: #448aff;
  display: flex;
  gap: 4px;
  justify-content: center;
  width: 200px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: large;
  padding: 8px;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  background-color: white;
  box-shadow: var(--shadow);
  transition: 700ms;
  cursor: pointer;

  &:hover {
    border-color: #448aff;
    box-shadow: rgba(68, 138, 255, 0.4) -5px 5px,
      rgba(68, 138, 255, 0.3) -10px 10px, rgba(68, 138, 255, 0.2) -15px 15px,
      rgba(68, 138, 255, 0.1) -20px 20px, rgba(68, 138, 255, 0.05) -25px 25px;
  }
`;
