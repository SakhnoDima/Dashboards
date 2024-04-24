import { useEffect, useState } from "react";

import { FcPieChart } from "react-icons/fc";

import { Campaigns_with_date } from "../dashboards/campaigns_with_date";
import { WidgetCreator } from "../form/campaigns_with_date_form";
import { Commands } from "../commands/commands.jsx";
import { instaDataParser } from "../../services/instaDataParser.js";
import { Title } from "./chart_styled.js";

import DataLoader from "../data_loaderr/data_loader.jsx";

export const Chart = () => {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    convertedData: [],
    columns: {},
  });
  const [widgets, setWidget] = useState({});

  useEffect(() => {
    instaDataParser().then((data) => {
      setInputData(data);
    });
  }, []);

  return (
    <>
      <Title>
        <FcPieChart />
        Smart Dashboard
      </Title>
      <Commands
        rootData={inputData}
        setWidget={setWidget}
        setLoading={setLoading}
        loading={loading}
      />
      <WidgetCreator
        setWidget={setWidget}
        loading={loading}
        setLoading={setLoading}
      />
      <DataLoader data={inputData.convertedData} />

      <Campaigns_with_date rootData={inputData} widget={widgets} />
    </>
  );
};
