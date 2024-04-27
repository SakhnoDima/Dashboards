import styled from "styled-components";

export const Title = styled.h1`
  font-size: xxx-large;
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 1140px) {
    font-size: x-large;
  }
  @media (max-width: 768px) {
    font-size: large;
    margin-bottom: 40px;
  }
`;

export const DashBox = styled.div`
  position: relative;
`;
