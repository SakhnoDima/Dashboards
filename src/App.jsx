import { CartBox, DesBox, MainBox } from "./app_styled";
import { Chart } from "./components/chart/chart";

const App = () => {
  return (
    <MainBox>
      <DesBox>
        <h2>Title</h2>
        <p>
          Easily transform copied data from spreadsheet applications, refine
          outputs with follow-up prompts, and create charts in any language.
        </p>
      </DesBox>
      <CartBox>
        <Chart />
      </CartBox>
    </MainBox>
  );
};

export { App };
