import { useEffect, useState, useMemo } from "react";

import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";
import LayoutModule from "@highcharts/dashboards/modules/layout";
import MathModifier from "@highcharts/dashboards/modules/math-modifier";
import { rootConnectors, rootLayOutCampaigns } from "../../constants";

LayoutModule(Dashboards);
MathModifier(Dashboards);

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

export const Campaigns_with_date = ({ rootData, widget }) => {
  const [components, setComponents] = useState([]);
  console.log(rootData);
  const newComponents = useMemo(() => {
    return [
      dashComponent,
      ...(Object.keys(widget).length !== 0 ? widget.components : []),
    ];
  }, [widget]);

  const newConnectors = useMemo(() => {
    return Object.keys(widget).length !== 0
      ? widget.connectors
      : rootConnectors;
  }, [widget]);

  useEffect(() => {
    if (components !== newComponents) {
      setComponents(newComponents);
    }
  }, [newComponents]);

  useEffect(() => {
    newConnectors.options.data = rootData.convertedData;
    Dashboards.board("container", {
      dataPool: { connectors: [newConnectors] },
      editMode: {
        enabled: true,
        contextMenu: {
          enabled: true,
          items: ["editMode"],
        },
      },
      gui: Object.keys(widget).length ? widget.gui : rootLayOutCampaigns,
      components: newComponents,
    });
  }, [rootData, widget, newComponents]);

  return <div id="container" />;
};
