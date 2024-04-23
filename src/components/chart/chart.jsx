import { useEffect, useMemo, useState } from "react";
import { FcPieChart } from "react-icons/fc";

import { Campaigns_with_date } from "../dashboards/campaigns_with_date";
import { WidgetCreator } from "../form/campaigns_with_date_form";
import { Commands } from "../commands/commands.jsx";
import { instaDataParser } from "../../services/instaDataParser.js";
import { Title } from "./chart_styled.js";

export const Chart = () => {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    convertedData: [],
    columns: {},
  });
  const [widgets, setWidget] = useState({});

  const columnOptions = useMemo(() => {
    let data = [];
    if (inputData.columns.dateColumns?.length > 0) {
      inputData.columns.dateColumns.forEach((thisArg) => {
        data.push(thisArg);
      });
      const options = data.reduce((obj, key) => {
        obj[key] = {
          cellFormatter: function () {
            return new Date(this.value).toISOString().substring(0, 10);
          },
        };
        return obj;
      }, {});

      return {
        renderTo: "main-data-grid",
        connector: {
          id: "main-data-grid-id",
        },
        type: "DataGrid",
        sync: {
          highlight: true,
        },
        dataGridOptions: {
          editable: false,
          columns: options,
        },
      };
    }
  }, [inputData.columns.dateColumns]);

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

      <Campaigns_with_date
        grid={columnOptions}
        rootData={inputData}
        widget={widgets}
      />
    </>
  );
};
