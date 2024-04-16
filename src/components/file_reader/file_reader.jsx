import React from "react";
import * as XLSX from "xlsx";

const File_reader = ({ loading, setFileData }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      // parse data
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      // get first worksheet
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      // Convert sheet to JSON
      // Assuming the first row is headers
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

      // Check if there are headers in the first row
      const headers = data[0];
      const formattedData = data.slice(1).map((row) => {
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
      const filteredData = formattedData.filter((row) => {
        return (
          Object.keys(row).length > 0 &&
          Object.values(row).some((value) => value !== "")
        );
      });
      setFileData(filteredData);
    };

    reader.readAsBinaryString(file);
  };
  return (
    <input
      disabled={loading}
      type="file"
      accept=".xlsx,.xls"
      onChange={handleFileUpload}
    />
  );
};

export default File_reader;
