import { useState } from "react";
import { Campaigns_with_date } from "../dashboards/campaigns_with_date";
import { WidgetCreator } from "../form/campaigns_with_date_form";

import { Commands } from "../commands/commands.jsx";

import File_reader from "../file_reader/file_reader.jsx";
import Data_reader from "../data_reader/data_reader.jsx";
import Data_grid from "../dashboards/data_grid.jsx";
import Table_viewer from "../table_viewer/table_viewer.jsx";

export const Chart = () => {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    convertedData: [],
    columns: {},
  });
  const [widgets, setWidget] = useState({});
  const [showGrid, setShowGrid] = useState(false);

  return (
    <>
      <Data_reader
        setInputData={setInputData}
        setLoading={setLoading}
        setShowGrid={setShowGrid}
      />
      <File_reader loading={loading} setFileData={setInputData} />

      {Object.keys(inputData.convertedData).length !== 0 && (
        <Table_viewer showGrid={showGrid} setShowGrid={setShowGrid} />
      )}

      {Object.keys(inputData.convertedData).length !== 0 && (
        <Commands
          rootData={inputData}
          setWidget={setWidget}
          setLoading={setLoading}
          loading={loading}
        />
      )}
      <WidgetCreator
        setWidget={setWidget}
        loading={loading}
        setLoading={setLoading}
      />
      {Object.keys(widgets).length !== 0 && (
        <Campaigns_with_date rootData={inputData} widget={widgets} />
      )}
      {showGrid ? <Data_grid rootData={inputData} /> : ""}
    </>
  );
};

// Create ascending column chart use "Creation Date" and "Daily Budget"
