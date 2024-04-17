import React from "react";
import { TextBox } from "./table_viewer_styled";

const Table_viewer = ({ showGrid, setShowGrid }) => {
  return (
    <TextBox>
      <p>
        Ваша таблиця успішно завантажена
        <span onClick={() => setShowGrid(!showGrid)}>
          {showGrid ? " сховати таблицю" : " показати таблицю"}
        </span>
      </p>
    </TextBox>
  );
};

export default Table_viewer;
