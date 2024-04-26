import styled from "styled-components";
export const DesBox = styled.div`
  max-width: 375px;
  height: 675px;
  font-size: medium;
  line-height: 1.5;
  padding: 50px 16px 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--shadow);
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
    max-width: 275px;
    height: 600px;
    font-size: small;
    line-height: 1.5;
    overflow-y: scroll;
  }
`;

export const StyledSpanFirst = styled.span`
  color: #00bcd4;
`;
export const StyledSpanSecond = styled.span`
  color: #448aff;
`;
