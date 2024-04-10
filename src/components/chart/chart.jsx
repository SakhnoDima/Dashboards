import { useEffect, useState } from "react";
import { Campaigns_with_date } from "../dashboards/campaigns_with_date";
import { WidgetCreator } from "../form/campaigns_with_date_form";

import { parser } from "../../services/parser";
import { loadedColumns } from "./../../constants/index.js";

export const Chart = () => {
  const [inputData, setInputData] = useState({});
  const [widgets, setWidget] = useState([]);

  useEffect(() => {
    setInputData(parser(loadedColumns));
  }, []);

  return (
    <>
      <WidgetCreator setWidget={setWidget} />
      <Campaigns_with_date rootData={inputData} widget={widgets} />
    </>
  );
};

// create chart use "Creation Date" and "Daily Budget"
// create line chart use "Campaign Name" and "Daily Budget"
// create chart use "Campaign Name" and "Daily Budget" add title "My new title", make each column different colors
// create pie chart use campaign date and daily budget
// create chart use "Creation Date" and "Daily Budget" for one series and "Creation Date" and "Clicks" for second series
// create chart use "Creation Date" and "Daily Budget" for one series and "Creation Date" and "Clicks" for second series  and "Creation Date" and "Imp" for third series
// create two widgets use "Creation Date" and "Daily Budget" for one and "Creation Date" and "Clicks" for second
// create three widgets use "Creation Date" and "Daily Budget" for one,"Creation Date" and "Clicks" for second, "Creation Date" and "Imp" for third
