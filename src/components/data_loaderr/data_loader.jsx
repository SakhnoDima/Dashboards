import React from "react";
import * as XLSX from "xlsx";
import Button from "../button/button";

const DataLoader = ({ data }) => {
  const handleExport = () => {
    // Создание рабочей книги и листа
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

    // Определите имя файла
    const fileName = "smart_dashboard_example.xlsx";

    // Скачивание файла
    XLSX.writeFile(workbook, fileName);
  };
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // Пример обработки первого листа файла
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        console.log(jsonData); // вывод данных в консоль для проверки
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert("Пожалуйста, выберите файл Excel для загрузки.");
    }
  };
  return (
    <>
      <Button onClick={handleExport} children={"Save doc"} />
      <input type="file" accept=".xlsx, .xls" onChange={handleImport} />
    </>
  );
};

export default DataLoader;
