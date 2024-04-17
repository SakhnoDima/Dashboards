import { useEffect, useState } from "react";
import { Campaigns_with_date } from "../dashboards/campaigns_with_date";
import { WidgetCreator } from "../form/campaigns_with_date_form";

import { Commands } from "../commands/commands.jsx";

import File_reader from "../file_reader/file_reader.jsx";
import Data_reader from "../data_reader/data_reader.jsx";

import Table_viewer from "../table_viewer/table_viewer.jsx";

export const Chart = () => {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    convertedData: [],
    columns: {},
  });
  const [widgets, setWidget] = useState({});
  const [showGrid, setShowGrid] = useState(false);
  const [grid, setGrid] = useState({});
  console.log(Object.keys(inputData.convertedData).length);
  return (
    <>
      <Data_reader
        setInputData={setInputData}
        setLoading={setLoading}
        setShowGrid={setShowGrid}
        setWidget={setWidget}
      />
      <File_reader loading={loading} setFileData={setInputData} />

      {Object.keys(inputData.convertedData).length !== 0 && (
        <>
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
        </>
      )}
      {Object.keys(inputData.convertedData).length !== 0 && (
        <Table_viewer
          rootData={inputData}
          setGrid={setGrid}
          showGrid={showGrid}
          setShowGrid={setShowGrid}
        />
      )}
      {Object.keys(widgets).length !== 0 || showGrid ? (
        <Campaigns_with_date
          grid={grid}
          rootData={inputData}
          widget={widgets}
        />
      ) : (
        ""
      )}
    </>
  );
};

// Create ascending column chart use "Creation Date" and "Daily Budget"
