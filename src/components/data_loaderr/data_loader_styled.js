import styled from "styled-components";

export const MainBox = styled.div`
  /* position: absolute;
  top: 5px;
  right: 10px; */
  z-index: 1;
  max-width: 408px;
  margin: 0 auto 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const DisabledInput = styled.input`
  display: none;
  opacity: 0;
  visibility: hidden;
`;

export const FaceInput = styled.label`
  width: 200px;
  color: #448aff;
  display: flex;
  gap: 4px;
  justify-content: center;
  font-size: large;
  box-sizing: border-box;
  outline: none;
  box-shadow: var(--shadow);
  padding: 8px 8px;
  border: none;
  border-radius: 8px;
  background-color: white;
  transition: 700ms;
  cursor: pointer;

  &:hover {
    border-color: #448aff;
    box-shadow: rgba(68, 138, 255, 0.4) 5px 5px,
      rgba(68, 138, 255, 0.3) 10px 10px, rgba(68, 138, 255, 0.2) 15px 15px,
      rgba(68, 138, 255, 0.1) 20px 20px, rgba(68, 138, 255, 0.05) 25px 25px;
  }
  @media (max-width: 1140px) {
    width: 150px;
    font-size: small;
  }
  @media (max-width: 768px) {
    font-size: x-small;
  }
`;
