import React from "react";
import { customCommands } from "../../constants/index";
import { widget_creator } from "../../services";
import { Box, Button } from "./commands_styled";

export const Commands = ({ setWidget, setLoading, loading }) => {
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
    console.log(command);
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
