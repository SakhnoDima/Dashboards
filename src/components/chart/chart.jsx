import { useEffect, useState } from "react";
import { Campaigns_with_date } from "../dashboards/campaigns_with_date";

import { parser } from "../../services/parser";
import { WidgetCreator } from "../form/campaigns_with_date_form";

export const loadedColumns = {
  publisher: "Publisher",
  campaign: "Campaign Name",
  creationDate: "Creation Date",
  dailyBudget: "Daily Budget",
  imp: "Imp",
  click: "Clicks",
};

export const Chart = () => {
  const [inputData, setInputData] = useState({});
  const [widget, setWidget] = useState({});

  useEffect(() => {
    setInputData(parser(loadedColumns));
  }, []);

  return (
    <>
      <WidgetCreator setWidget={setWidget} />
      <Campaigns_with_date rootData={inputData} widget={widget} />
    </>
  );
};

//create chart use "Creation Date" and "Daily Budget"
//create line chart use "Campaign Name" and "Daily Budget"
//create chart use "Campaign Name" and "Daily Budget" add title "My new title", make each column diferent colors
//create pie chart use campaign date and daily budget
