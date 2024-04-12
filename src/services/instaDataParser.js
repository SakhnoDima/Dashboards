import PublicGoogleSheetsParser from "public-google-sheets-parser";
import { SHEET_ID, SHEET_NAME } from "../components/google_parser/parser";

const options = { sheetName: SHEET_NAME.fifthTable, useFormat: false };

const instaDataParser = async () => {
  const parser = new PublicGoogleSheetsParser(SHEET_ID, options);
  return parser
    .parse()
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
};
export { instaDataParser };
