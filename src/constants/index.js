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
              id: "grid-widget",
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

export const rootConnectors = {
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
};

export const customCommands = [
  `Create chart use 'Creation Date' and 'Daily Budget'`,
  `Create chart use 'Creation Date' and 'Daily Budget' add plotLines to yAxis: value: 500, label: 500$`,
  `Create ascending column chart use "Campaign Name" and "Daily Budget"`,
  `Create chart use "Campaign Name" and "Daily Budget" add title "My new title", make each column different colors`,
  `Create pie chart use campaign date and daily budget`,
  `Create chart use "Creation Date" and "Daily Budget" for one series and "Creation Date" and "Clicks" for second series`,
  `Create chart use "Creation Date" and "Daily Budget" for one series and "Creation Date" and "Clicks" for second series  and "Creation Date" and "Imp" for third series`,
  `Create two widgets use "Creation Date" and "Daily Budget" for one and "Creation Date" and "Clicks" for second`,
  `Create three widgets use "Creation Date" and "Daily Budget" for one,"Creation Date" and "Clicks" for second, "Creation Date" and "Imp" for third`,
];

export const SHEET_ID = "1biCvz2yYY8P6e1Dfuw-ahYX7-rFpJtlXt2dVi76SLzY";
export const SHEET_NAME = {
  firstTable: "Groceries",
  secondTable: "Coins",
  thirdTable: "list_3",
  fourthTable: "list_4",
  fifthTable: "list_5",
};

export const unixTimeRegex = /Date\((\d+),(\d+),(\d+)\)/;
