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

export const Campaigns_with_date = ({ rootData, widget }) => {
  useEffect(() => {
    Dashboards.board("container", {
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
      editMode: {
        enabled: true,
        contextMenu: {
          enabled: true,
          items: ["editMode"],
        },
      },
      gui: widget.gui,
      components: widget.components,
    });
  }, [rootData, widget]);

  return <div id="container" />;
};
