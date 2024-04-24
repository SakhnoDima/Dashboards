import {
  CartBox,
  DesBox,
  MainBox,
  StyledSpanFirst,
  StyledSpanSecond,
} from "./app_styled";
import { Chart } from "./components/chart/chart";

const App = () => {
  return (
    <MainBox>
      <DesBox>
        <h2>
          Create <StyledSpanFirst>useful</StyledSpanFirst> and{" "}
          <StyledSpanSecond>informative</StyledSpanSecond> charts with simple
          prompts.
        </h2>
        <p>
          Transform a mundane table into engaging and informative charts using
          simple prompts.
        </p>
        <br />
        <p>
          This approach aids in data visualization, allowing analysts to quickly
          comprehend the data and enabling users to save time when creating
          charts.
        </p>
        <br />
        <p>
          Smart Dashboards are designed to simplify charting for users. There's
          no need to be a programmer; just enter a prompt and obtain the result.
        </p>
      </DesBox>
      <CartBox>
        <Chart />
      </CartBox>
    </MainBox>
  );
};

export { App };
