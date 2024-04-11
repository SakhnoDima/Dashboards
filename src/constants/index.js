export const loadedColumns = {
  publisher: "Publisher",
  campaign: "Campaign Name",
  creationDate: "Creation Date",
  dailyBudget: "Daily Budget",
  imp: "Imp",
  click: "Clicks",
};

export const rootLayOut = {
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
              id: "first-widget",
            },
            {
              id: "second-widget",
            },
          ],
        },
      ],
    },
  ],
};

export const customCommands = [
  `Create chart use 'Creation Date' and 'Daily Budget'`,
  `Create chart use 'Creation Date' and 'Daily Budget' add plotLines to yAxis: value: 500, label: 500$`,
  `Create line chart use "Campaign Name" and "Daily Budget"`,
  `Create chart use "Campaign Name" and "Daily Budget" add title "My new title", make each column different colors`,
  `Create pie chart use campaign date and daily budget`,
  `Create chart use "Creation Date" and "Daily Budget" for one series and "Creation Date" and "Clicks" for second series`,
  `Create chart use "Creation Date" and "Daily Budget" for one series and "Creation Date" and "Clicks" for second series  and "Creation Date" and "Imp" for third series`,
  `Create two widgets use "Creation Date" and "Daily Budget" for one and "Creation Date" and "Clicks" for second`,
  `Create three widgets use "Creation Date" and "Daily Budget" for one,"Creation Date" and "Clicks" for second, "Creation Date" and "Imp" for third`,
];
