import React, { useEffect, useState } from "react";

import { widget_creator } from "../../services";
import { Box, Button } from "./commands_styled";

export const Commands = ({ setWidget, setLoading, loading, rootData }) => {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    const valueWithDateOrString =
      rootData.columns.dateColumns[0] || rootData.columns.stringColumns[0];
    const valueWithNumber = rootData.columns.numberColumns[0];
    const valueWithString = rootData.columns.stringColumns[0];

    setCommands([
      `Create column chart use '${valueWithString}' and '${valueWithNumber}'`,
      `Create chart use '${valueWithDateOrString}' and '${valueWithNumber}' add plotLines to yAxis`,
      `Create ascending column chart use '${valueWithString}' and '${valueWithNumber}'`,
      `Create chart use '${valueWithString}' and '${valueWithNumber}' add title "My new title", make each column different colors`,
      `Create pie chart use '${valueWithDateOrString}' and '${valueWithNumber}'`,
      `Create chart use '${valueWithDateOrString}' and '${valueWithNumber}' for one series and '${valueWithDateOrString}' and "${rootData.columns.numberColumns[1]}" for second series`,
      `Create chart use '${valueWithDateOrString}' and '${valueWithNumber}' for one series and '${valueWithDateOrString}' and "${rootData.columns.numberColumns[1]}" for second series and '${valueWithDateOrString}' and "${rootData.columns.numberColumns[2]}" for third series`,
      `Create two widgets use '${valueWithDateOrString}' and '${valueWithNumber}' for one and '${valueWithDateOrString}' and "${rootData.columns.numberColumns[1]}" for second`,
      `Create three widgets use '${valueWithDateOrString}' and '${valueWithNumber}' for one,'${valueWithDateOrString}' and "${rootData.columns.numberColumns[1]}" for second, '${valueWithDateOrString}' and "${rootData.columns.numberColumns[2]}" for third`,
    ]);
  }, [rootData]);

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
      {commands.map((el, ind) => (
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
