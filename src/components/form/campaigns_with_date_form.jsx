import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledForm } from "./styles_forma";
import { widget_creator } from "../../services";
import * as XLSX from 'xlsx';

export const WidgetCreator = ({ setWidget, loading, setLoading, setFileData }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      try {
        setLoading(true);
        const res = await widget_creator(message);
        console.log(res);
        setWidget(JSON.parse(res));
      } catch (error) {
        console.log(error);
      } finally {
        setMessage("");
        setLoading(false);
      }
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      // parse data
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      // get first worksheet
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      // Convert sheet to JSON
      // Assuming the first row is headers
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

      // Check if there are headers in the first row
      const headers = data[0];
      const formattedData = data.slice(1).map(row => {
        let rowObject = {};
        headers.forEach((header, index) => {
          // Only add non-empty cells to the row object
          if (row[index] !== undefined && row[index] !== "") {
            rowObject[header] = row[index];
          }
        });
        return rowObject;
      });

      // Filter out empty rows
      // A row is considered empty if it has no properties or all properties are empty
      const filteredData = formattedData.filter(row => {
        return Object.keys(row).length > 0 && Object.values(row).some(value => value !== "");
      });
      setFileData(filteredData);
    };

    reader.readAsBinaryString(file);
  };


  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
      <input
        type="text"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button disabled={loading} type="submit">
        {loading ? "Submitting..." : "Submit"}
      </button>
    </StyledForm>
  );
};

WidgetCreator.propTypes = {
  setWidget: PropTypes.func.isRequired,
};
