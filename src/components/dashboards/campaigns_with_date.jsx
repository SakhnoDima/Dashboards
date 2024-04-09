import { useEffect, useState } from "react";

import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";
import LayoutModule from "@highcharts/dashboards/modules/layout";

LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

const rootLayOut = {
  layouts: [
    {
      rows: [
        {
          cells: [
            {
              id: "main-data-grid",
            },
          ],
        },
        {
          cells: [
            {
              id: "date-widget",
            },
          ],
        },
      ],
    },
  ],
};
const components = [
  {
    cell: "main-data-grid",
    connector: {
      id: "main-data-grid-id",
    },
    type: "DataGrid",

    sync: {
      highlight: true,
    },
    dataGridOptions: {
      editable: false,
      columns: {
        "Creation Date": {
          cellFormatter: function () {
            return new Date(this.value).toISOString().substring(0, 10);
          },
        },
      },
    },
  },
  {
    renderTo: "date-widget",
    type: "Highcharts",
    connector: {
      id: "main-data-grid-id",
      columnAssignment: [
        {
          seriesId: "daily-price",
          data: ["Creation Date", "Daily Budget"],
        },
      ],
    },
    sync: {
      highlight: true,
    },
    chartOptions: {
      chart: {
        animation: false,
        type: "line",
      },
      title: {
        text: "Daily price",
      },
      series: [
        {
          id: "daily-price",
          name: "Daily Budget",
        },
      ],
      tooltip: {
        shared: true,
        split: true,
        stickOnContact: true,
      },
      xAxis: {
        type: "datetime",
        accessibility: {
          description: "Date and time",
        },
      },
      yAxis: [
        {
          title: {
            text: "Price",
          },
        },
      ],
    },
  },
];
const dataPool = {
  connectors: [
    {
      id: "main-data-grid-id",
      type: "JSON",
      options: {
        firstRowAsNames: false,
        columnNames: [
          "Publisher",
          "Campaign Name",
          "Creation Date",
          "Daily Budget",
          "Imp",
          "Clicks",
        ],
        data: [],
        dataModifier: {},
      },
    },
  ],
};

export const Campaigns_with_date = ({ rootData }) => {
  console.log(rootData);
  useEffect(() => {
    dataPool.connectors[0].options.data = rootData;
    dataPool.connectors[0].options.dataModifier = {
      type: "Range",
      ranges: [
        {
          column: "Daily Budget",
          minValue: "450",
        },
      ],
    };
    Dashboards.board("container", {
      dataPool,
      editMode: {
        enabled: true,
        contextMenu: {
          enabled: true,
          items: ["editMode"],
        },
      },
      gui: rootLayOut,
      components,
    });
  }, [rootData, rootLayOut, components]);

  return <div id="container" />;
};
