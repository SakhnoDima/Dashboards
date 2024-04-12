import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";
import LayoutModule from "@highcharts/dashboards/modules/layout";

LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

const config = {
  dataPool: {
    connectors: [
      {
        id: "dashboard-parser-id",
        type: "JSON",
        options: {
          firstRowAsNames: false,
          data: [],
          dataModifier: {},
        },
      },
      {
        id: "google-sheet-connector-id",
        type: "GoogleSheets",
        enablePolling: true,
        dataRefreshRate: 10,
        options: {
          googleAPIKey: "AIzaSyAsJcqoPw4wiuB0jd-uB_H4VuEyakP7pOw",
          googleSpreadsheetKey: "1biCvz2yYY8P6e1Dfuw-ahYX7-rFpJtlXt2dVi76SLzY",
          // googleSpreadsheetRange: "A1:H7",
          worksheet: 2,
          // startRow: 0, // Adjust if your data doesn't start from the first row
          // endRow: null, // Adjust if you want to limit the number of rows read
          // startColumn: 0, // Adjust if your data doesn't start from the first column
          // endColumn: null, // Adjust if you want to limit the number of columns read
        },
      },
    ],
  },
  gui: {
    layouts: [
      {
        rows: [
          {
            cells: [
              {
                id: "dashboard-parser",
              },
            ],
          },
          {
            cells: [
              {
                id: "widget_1",
              },
            ],
          },
          {
            cells: [
              {
                id: "google-sheet-connector",
              },
            ],
          },
        ],
      },
    ],
  },
  components: [
    {
      cell: "google-sheet-connector",
      connector: {
        id: "google-sheet-connector-id",
      },
      type: "DataGrid",
      editable: true,
      sync: {
        highlight: true,
        visibility: true,
      },
      dataGridOptions: {
        editable: false,
        columns: {
          Начало: {
            cellFormatter: function () {
              return new Date(this.value).toISOString().substring(0, 10);
            },
          },
        },
      },
    },
    {
      cell: "dashboard-parser",
      connector: {
        id: "dashboard-parser-id",
      },
      type: "DataGrid",
      editable: true,
      sync: {
        highlight: true,
        visibility: true,
      },
    },
    {
      renderTo: "widget_1",
      type: "Highcharts",
      connector: {
        id: "google-sheet-connector-id",
        columnAssignment: [
          {
            seriesId: "id",
            data: ["Результат", "Цена за результат"],
          },
        ],
      },
      sync: {
        highlight: true,
      },
      chartOptions: {
        chart: {
          animation: false,
          type: "column",
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        series: [
          {
            id: "id",
            name: "",
          },
        ],
        tooltip: {
          shared: true,
          split: true,
          stickOnContact: true,
        },
        lang: {
          accessibility: {
            chartContainerLabel: "",
          },
        },
        accessibility: {
          description: "",
        },
        xAxis: {
          type: "datetime", //category..datetime
          accessibility: {
            description: "",
          },
        },
        yAxis: [
          {
            title: {
              text: "",
            },
          },
        ],
        plotOptions: {
          series: {
            animation: {
              duration: 2000,
            },
            marker: {
              enabled: false,
            },
            lineWidth: 2,
          },
        },
      },
    },
  ],
};

export const InstaDataDashboard = ({ data }) => {
  useEffect(() => {
    config.dataPool.connectors[0].options.data = data;
    Dashboards.board("container", config);
  }, [config, data]);

  return <div id="container" />;
};
