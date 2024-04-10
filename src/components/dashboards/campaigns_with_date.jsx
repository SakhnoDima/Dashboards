import { useEffect, useState, useMemo } from "react";

import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";
import LayoutModule from "@highcharts/dashboards/modules/layout";
import { rootLayOut } from "../../constants";

LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

const dashComponent = {
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
};
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
  const [components, setComponents] = useState([]);
  const newComponents = useMemo(() => {
    return [
      dashComponent,
      ...(Object.keys(widget).length !== 0 ? widget.components : []),
    ];
  }, [rootData, widget]);

  useEffect(() => {
    if (components !== newComponents) {
      setComponents(newComponents);
    }
  }, [newComponents]);

  useEffect(() => {
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
      gui: Object.keys(widget).length ? widget.gui : rootLayOut,
      components: newComponents,
    });
  }, [rootData, widget, newComponents]);

  return <div id="container" />;
};
