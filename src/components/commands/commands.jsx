import React, { useEffect, useState } from "react";

import { widget_creator } from "../../services";
import { Box, Button } from "./commands_styled";

export const customCommands = [
  `Create pie chart use Название кампании and Сумма затрат (USD)`,
  `Create chart with 1 series use Название кампании and Сумма затрат (USD) add plotLines to yAxis, value 80`,
  `Create bar chart with use Название кампании and Частота, Название кампании and Сумма затрат (USD), Название кампанииand and CPC (цена за клик по ссылке)`,

  `Create line chart with 1 series use Название кампании and CPC (цена за клик по ссылке), Название кампании and CTR (кликабельность)`,

  `Create line chart with 1 series use Название кампании and Охват, Название кампании and Сумма затрат (USD)`,

  "Create two widgets use Название кампании and Охват, Название кампании and Показы for one and Название кампании and Частота, Название кампании and Сумма затрат (USD) for second",
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
