import styled from "styled-components";
export const DesBox = styled.div`
  max-width: 370px;
  min-width: 230px;
  height: 700px;
  font-size: medium;
  line-height: 1.5;
  padding: 20px 16px 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--shadow);
  overflow-y: scroll;
  h2 {
    text-align: center;
    margin-bottom: 16px;
  }
  ul {
    li {
      margin-bottom: 4px;
      display: flex;
      gap: 8px;
      align-items: center;
      svg {
        width: 25px;
        fill: #448aff;
      }
    }
    :last-child {
      margin-bottom: 0;
    }
  }
  @media (max-width: 1140px) {
    padding-top: 25px;
    min-width: 200px;
    max-width: 200px;
    height: 600px;

    font-size: small;
    line-height: 1.5;
    height: 500px;
  }
  @media (max-width: 768px) {
    font-size: x-small;
    max-width: 200px;
    padding: 30px 16px 16px;
  }
`;

export const StyledSpanFirst = styled.span`
  color: #00bcd4;
`;
export const StyledSpanSecond = styled.span`
  color: #448aff;
`;
