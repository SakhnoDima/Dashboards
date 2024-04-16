import PublicGoogleSheetsParser from "public-google-sheets-parser";
import { SHEET_ID, SHEET_NAME } from "../components/google_parser/parser";

const options = { sheetName: SHEET_NAME.insta_data, useFormat: false };
const unixTimeRegex = /Date\((\d+),(\d+),(\d+)\)/;
const regex = /^(?:\$|%).*|.*(?:\$|%)$/;

const instaDataParser = async (tableId, sheetName) => {
  const parser = new PublicGoogleSheetsParser(
    tableId,
    (options.sheetName = sheetName)
  );
  return parser.parse().then((data) => {
    const columns = new Set();
    const convertedData = data.map((obj) => {
      const newObj = {};
      for (const key in obj) {
        columns.add(key); //додаємо назву колонки
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          const match = unixTimeRegex.exec(value);
          //перевірка на дату
          if (match) {
            const [, year, month, day] = match;
            const dateObj = new Date(+year, +month, +day + 1);
            newObj[key] = dateObj.getTime();
            //перевірка на число
          } else if (typeof obj[key] === "string" && regex.test(obj[key])) {
            const numberStr = obj[key]
              .match(/[\d.,]+/g)
              .join("")
              .replace(",", ".");
            const number = parseFloat(numberStr);
            newObj[key] = number;
          } else {
            newObj[key] = value;
          }
        }
      }
      return newObj;
    });
    return { convertedData, columns };
  });
};
export { instaDataParser };
