import { useEffect, useState } from "react";
import { Campaigns_with_date } from "../dashboards/campaigns_with_date";
import { WidgetCreator } from "../form/campaigns_with_date_form";

import { parser } from "../../services/parser";
import { loadedColumns } from "./../../constants/index.js";
import { Commands } from "../commands/commands.jsx";

export const Chart = () => {
  const [inputData, setInputData] = useState({});
  const [widgets, setWidget] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInputData(parser(loadedColumns));
  }, []);

  return (
    <>
      <Commands
        setWidget={setWidget}
        setLoading={setLoading}
        loading={loading}
      />
      <WidgetCreator
        setWidget={setWidget}
        loading={loading}
        setLoading={setLoading}
      />
      <Campaigns_with_date rootData={inputData} widget={widgets} />
    </>
  );
};
