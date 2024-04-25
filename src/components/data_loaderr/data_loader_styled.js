import styled from "styled-components";

export const MainBox = styled.div`
  max-width: 408px;
  margin: 0 auto 20px;
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
  width: 200px;
  outline: none;
  color: black;
  padding: 8px 0px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  transition: 700ms;
  &:hover {
    color: #448aff;
    border-color: #448aff;
    box-shadow: rgba(68, 138, 255, 0.4) 5px 5px,
      rgba(68, 138, 255, 0.3) 10px 10px, rgba(68, 138, 255, 0.2) 15px 15px,
      rgba(68, 138, 255, 0.1) 20px 20px, rgba(68, 138, 255, 0.05) 25px 25px;
  }
`;
