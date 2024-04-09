import { useEffect, useState } from "react";
import { Campaigns_with_date } from "../dashboards/campaigns_with_date";

import { SHEET_ID, SHEET_NAME } from "../google_parser/parser";
import PublicGoogleSheetsParser from "public-google-sheets-parser";

export const Chart = () => {
  const [inputData, setInputData] = useState({});

  useEffect(() => {
    const options = { sheetName: SHEET_NAME.secondTable, useFormat: true };
    const parser = new PublicGoogleSheetsParser(SHEET_ID, options);
    parser.parse().then((data) => {
      setInputData(
        data.map((elem) => [
          elem["Publisher"],
          elem["Campaign Name"],
          Date.parse(elem["Creation Date"]),
          parseFloat(elem["Daily Budget"].slice(1)),
          parseFloat(elem["Imp."]),
          parseFloat(elem["Clicks"]),
        ])
      );
    });
  }, []);

  return <Campaigns_with_date rootData={inputData} />;
};
