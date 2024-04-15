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
      dataGridOptions: {
        editable: false,
        columns: {
          Начало: {
            cellFormatter: function () {
              //!не впевненій що потрібно
              // if (!this.value) {
              //   console.log(new Date().toISOString().substring(0, 10));
              //   return new Date().toISOString().substring(0, 10);
              // }
              return new Date(this.value).toISOString().substring(0, 10);
            },
          },
          "Дата начала отчетности": {
            cellFormatter: function () {
              return new Date(this.value).toISOString().substring(0, 10);
            },
          },
          "Дата окончания отчетности": {
            cellFormatter: function () {
              return new Date(this.value).toISOString().substring(0, 10);
            },
          },
        },
      },
    },
    // {
    //   renderTo: "widget_1",
    //   type: "Highcharts",
    //   connector: {
    //     id: "dashboard-parser-id",
    //     columnAssignment: [
    //       {
    //         seriesId: "id",
    //         data: ["Начало", "Охват"],
    //       },
    //     ],
    //   },
    //   sync: {
    //     highlight: true,
    //   },
    //   chartOptions: {
    //     chart: {
    //       animation: false,
    //       type: "column",
    //     },
    //     title: {
    //       text: "",
    //     },
    //     subtitle: {
    //       text: "",
    //     },
    //     series: [
    //       {
    //         id: "id",
    //         name: "",
    //       },
    //     ],
    //     tooltip: {
    //       shared: true,
    //       split: true,
    //       stickOnContact: true,
    //     },
    //     lang: {
    //       accessibility: {
    //         chartContainerLabel: "",
    //       },
    //     },
    //     accessibility: {
    //       description: "",
    //     },
    //     xAxis: {
    //       type: "datetime", //category..datetime
    //       accessibility: {
    //         description: "",
    //       },
    //     },
    //     yAxis: [
    //       {
    //         title: {
    //           text: "",
    //         },
    //       },
    //     ],
    //     plotOptions: {
    //       series: {
    //         animation: {
    //           duration: 2000,
    //         },
    //         marker: {
    //           enabled: false,
    //         },
    //         lineWidth: 2,
    //       },
    //     },
    //   },
    // },
  ],
};

export const InstaDataDashboard = ({ data }) => {
  useEffect(() => {
    config.dataPool.connectors[0].options.data = data;
    Dashboards.board("container", config);
  }, [config, data]);

  return <div id="container" />;
};
