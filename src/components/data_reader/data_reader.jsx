import React, { useState } from "react";
import PropTypes from "prop-types";
import { instaDataParser } from "../../services";
import { ErrorMessage, Forma } from "./data_reader_styled";

const Data_reader = ({ setInputData, setLoading }) => {
  const [tableId, setTableId] = useState("");
  const [sheetName, setSheetName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await instaDataParser(tableId, sheetName);

    if (data.convertedData.length === 0) {
      setError(true);
    } else {
      setInputData(data);
      setError(false);
    }
    setTableId("");
    setSheetName("");
    setLoading(false);
  };
  return (
    <>
      <Forma onSubmit={handleSubmit}>
        <input
          required
          placeholder="Table ID"
          type="text"
          name="table_id"
          value={tableId}
          onChange={(e) => setTableId(e.target.value.trim())}
        />
        <input
          placeholder="Sheet name"
          type="text"
          name="sheet_name"
          value={sheetName}
          onChange={(e) => setSheetName(e.target.value.trim())}
        />
        <button type="submit">Submit</button>
      </Forma>
      {error ? (
        <ErrorMessage>
          Не вдалося завантажити файл, перевірте введені дані та повторіть
          спробу.
        </ErrorMessage>
      ) : (
        ""
      )}
    </>
  );
};

export default Data_reader;

Data_reader.propTypes = {
  setInputData: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
