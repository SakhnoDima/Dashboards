import React, { useEffect } from "react";

import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";
import LayoutModule from "@highcharts/dashboards/modules/layout";
LayoutModule(Dashboards);
Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

const Data_grid = ({ rootData }) => {
  console.log(Object.keys(rootData.columns).length);

  if (Object.keys(rootData.columns).length) {
    console.log(rootData.columns.dateColumns["0"]);
  }
  //   console.log(
  //     comands.map((el) => {
  //       return {
  //         el: {
  //           cellFormatter: function () {
  //             return new Date(this.value).toISOString().substring(0, 10);
  //           },
  //         },
  //       };
  //     })
  //   );
  useEffect(() => {
    Dashboards.board("container_id", {
      dataPool: {
        connectors: [
          {
            id: "main-data-grid-id",
            type: "JSON",
            options: {
              firstRowAsNames: false,
              columnNames: [],
              data: rootData.convertedData,
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
                    id: "main-data-grid-cell",
                  },
                ],
              },
            ],
          },
        ],
      },
      components: [
        {
          renderTo: "main-data-grid-cell",
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
              Начало: {
                cellFormatter: function () {
                  return new Date(this.value).toISOString().substring(0, 10);
                },
              },
              "Дата окончания отчетности": {
                cellFormatter: function () {
                  return new Date(this.value).toISOString().substring(0, 10);
                },
              },

              "Дата начала отчетности": {
                cellFormatter: function () {
                  return new Date(this.value).toISOString().substring(0, 10);
                },
              },
            },
          },
        },
      ],
    });
  }, [rootData]);

  return <div id="container_id" />;
};

export default Data_grid;
