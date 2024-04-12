import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import Dashboards from '@highcharts/dashboards';
import DataGrid from '@highcharts/dashboards/datagrid';
import LayoutModule from '@highcharts/dashboards/modules/layout';

LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

export default function KpiWidget() {
    useEffect(() => {
        Dashboards.board('kpi_widget', {
            components: [
                {
                    type: 'KPI',
                    renderTo: 'kpi-vitamin-a',
                    value: 900,
                    valueFormat: '{value}',
                    title: 'Vitamin A',
                    subtitle: 'daily recommended dose',
                },
            ],
            gui: {
                layouts: [
                    {
                        rows: [
                            {
                                cells: [
                                    {
                                        id: 'kpi_widget',
                                        layout: {
                                            rows: [
                                                {
                                                    cells: [
                                                        {
                                                            id: 'kpi-vitamin-a',
                                                        },
                                                        {
                                                            id: 'kpi-iron',
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        });
    }, []);

    return <div id="kpi_widget" />;
};