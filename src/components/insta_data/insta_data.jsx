import React, { useEffect, useState } from "react";
import { instaDataParser } from "../../services";
import { InstaDataDashboard } from "../dashboards/insta_data_dashboard";

export const Insta_data = () => {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    instaDataParser().then((data) => setSheetData(data));
  }, []);
  return <InstaDataDashboard data={sheetData} />;
};
