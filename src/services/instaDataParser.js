import PublicGoogleSheetsParser from "public-google-sheets-parser";
import { SHEET_ID, SHEET_NAME } from "../components/google_parser/parser";
import { unixTimeRegex } from "../constants";

const options = { sheetName: SHEET_NAME.fifthTable, useFormat: false };

const instaDataParser = async () => {
  const parser = new PublicGoogleSheetsParser(SHEET_ID, options);
  return parser
    .parse()
    .then((data) => {
      const columns = new Set();
      const convertedData = data.map((obj) => {
        const newObj = {};
        for (const key in obj) {
          columns.add(key); //додаємо назву колонки
          if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const match = unixTimeRegex.exec(value);
            if (match) {
              const [, year, month, day] = match;
              const dateObj = new Date(+year, +month, +day + 1);
              newObj[key] = dateObj.getTime();
            } else {
              newObj[key] = value;
            }
          }
        }
        return newObj;
      });

      return { convertedData, columns };
    })
    .catch((error) => console.log(error));
};
export { instaDataParser };