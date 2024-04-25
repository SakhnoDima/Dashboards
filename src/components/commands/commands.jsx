import React, { useEffect, useState } from "react";

import { widget_creator } from "../../services";
import { Box, Button } from "./commands_styled";

export const customCommands = [
  `Create pie chart use Campaign Name and Cost (USD)`,

  `Show two line graphs. The first will show how CPC changed by Campaign Name, and the second will show how Clicks changed by Campaign Name`,

  `Create chart with 1 series use Campaign Name and Cost (USD). Add plotLines to yAxis, text: "Max value", value 80"`,

  `Create bar chart with use "Campaign Name" and "Frequency", "Campaign Name" and Cost (USD), "Campaign Name" and "CPC"`,

  `Create line chart with 1 series use Campaign Name and Coverage, Campaign Name and Cost (USD)`,

  "Create two widgets use Campaign Name and Coverage, Campaign Name and Impressions for one and Campaign Name and Frequency, Campaign Name and Cost (USD) for second",
];

export const Commands = ({ setWidget, setLoading, loading, rootData }) => {
  const handleClick = async (command) => {
    try {
      setLoading(true);
      const res = await widget_creator(command);
      console.log(res);
      setWidget(JSON.parse(res));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box>
      {customCommands.map((el, ind) => (
        <Button
          disabled={loading}
          key={ind}
          type="button"
          onClick={() => handleClick(el)}
        >
          {el}
        </Button>
      ))}
    </Box>
  );
};
