import styled from "styled-components";

export const MainBox = styled.div`
  padding: 40px 20px;
  display: flex;
  gap: 80px;
`;

export const DesBox = styled.div`
  max-width: 375px;
  height: 875px;
  line-height: 1.5;
  padding: 50px 16px 16px;
  background-color: white;
  border-radius: 8px;

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
      p {
        width: 300px;
      }
    }
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledSpanFirst = styled.span`
  color: #00bcd4;
`;
export const StyledSpanSecond = styled.span`
  color: #448aff;
`;

export const CartBox = styled.div`
  max-width: 1600px;
`;
