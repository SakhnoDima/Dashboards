import { FcBarChart } from "react-icons/fc";
import {
  DesBox,
  StyledSpanFirst,
  StyledSpanSecond,
} from "./description_styled";

const arr = [
  "Cost per result, compare how the cost per click has changed.",
  "Analyze CPC and CPM indicators to determine the most and least cost-effective campaigns.",
  "Coverage and engagement analysis using campaign metrics.",
];

const Description = () => {
  return (
    <DesBox>
      <h2>
        Create <StyledSpanFirst>useful</StyledSpanFirst> and
        <StyledSpanSecond>informative</StyledSpanSecond> charts with simple
        prompts.
      </h2>
      <p>
        Smart Dashboards simplify charting for users without requiring
        programming skills. Simply enter a prompt to receive results. This tool
        allows for the analysis of real statistics from an Instagram user's
        advertising campaigns. Just specify the parameters you are interested in
        your request to receive an analysis of the advertising campaign.
      </p>
      <br />
      <p>Analyze campaign performance:</p>
      <ul>
        {arr.map((el, indx) => (
          <li key={indx}>
            <FcBarChart />
            <p>{el}</p>
          </li>
        ))}
      </ul>
      <br />
      <p>
        Use the ability to upload and download a table to change the values ​​of
        indicators. Do not change the original table structure and cell formats.
      </p>
      <br />
      <p>
        Diagram generation uses AI, make sure the instructions in the prompt are
        clear to it. Data may not be accurate.
      </p>
    </DesBox>
  );
};

export default Description;
