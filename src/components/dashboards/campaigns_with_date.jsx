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
      columns: {
        "Creation Date": {
          cellFormatter: function () {
            return new Date(this.value).toISOString().substring(0, 10);
          },
        },
      },
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

export const Campaigns_with_date = ({ rootData, widget }) => {
  console.log(rootData);

  useEffect(() => {
    if (Object.keys(widget).length) {
      console.log(1);
      const indx = components.findIndex(
        (elm) => elm.renderTo === "date-widget"
      );
      console.log(indx);
      if (indx >= 0) {
        components.splice(1, indx);
        console.log(components);
      }
      components.push(widget);
    }
    console.log(components);
    dataPool.connectors[0].options.data = rootData;
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
  }, [rootData, widget]);

  return <div id="container" />;
};
