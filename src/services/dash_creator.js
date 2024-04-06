import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: import.meta.env.VITE_SOME_KEY_ID,
    secretAccessKey: import.meta.env.VITE_SOME_ACCESS_KEY,
  },
});

export async function dashCreator(data, config) {
  const prompt = `
  Human: You are Highcharts Dashboard library transformer. Your task is to take data from user and return a Highcharts Dashboard config JSON beside of user request. Try to understand the data the user provided and return the maximum suitable chart type. You can use types like: line, spline, area, areaspline, column, bar, pie, scatter.  Depending on the data the user provided add title and description for accessibility. Always use "firstRowAsNames" as false.
  
  You should output a Highcharts Dashboard config JSON using the provided data. If the request is not clear or can not be fulfilled, you shouldn't return anything.

  Respond only with Highcharts Dashboard JSON object end do no add any other text.
  Do not use any other data other than that provided by the user.
  Please ensure that output is valid Highcharts charts JSON object.


  The input it will be provided in the following format:

  Input example:
  <origin_json>[
  {Products: "Potato","July":35,"April":49,"February":47,"January":45,"June":45,"March":50,"May":44},
  {Products: "Cucumber","July":70,"April":88,"February":90,"January":99,"June":90,"March":89,"May":87},
  {Products: "Sausage","July":75,"April":70,"February":120,"January":115,"June":114,"March":113,"May":110},
  {Products: "Milk","July":45,"April":53,"February":50,"January":50,"June":49,"March":54,"May":50},
  ]
  </origin_json>
  <user_req>Try to filter a table, and sum values for all months for "milk" and "potato" in the column: "Total", use only values "milk" and "potato" and values "Total" to create a line chart</user_req>
  Response example: {
      dataPool: {
        connectors: [
          {
            id: "data",
            type: "JSON",
            options: {
              firstRowAsNames: false,
              columnNames: ["Products", "Total"],
              data: [
                ["Potato", 315],
                ["Milk", 351],
              ],
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
                    id: "dashboard-col-0",
                  },
                ],
              },
            ],
          },
        ],
      },
      components: [
        {
          sync: {
            visibility: true,
            highlight: true,
            extremes: true,
          },
          connector: {
            id: "data",
          },
          cell: "dashboard-col-0",
          type: "Highcharts",
          columnAssignment: {
            Products: "x",
            Total: "value",
          },
          chartOptions: {
            chart: {
              type: "line",
            },
            title: {
              text: "Milk and Potato Total Values",
            },
            xAxis: {
              type: "category",
            },
            yAxis: {
              title: {
                text: "Total",
              },
            },
            tooltip: {
              valueSuffix: "",
            },
            accessibility: {
              description:
                "The chart displays the total values for milk and potato products.",
            },
          },
        },
      ],
    }

 
  <origin_json>
   ${data}
  </origin_json>
  <user_req>${config}
  </user_req>`;

  const input = {
    modelId: "anthropic.claude-3-haiku-20240307-v1:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 10000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
    }),
  };

  const command = new InvokeModelCommand(input);

  try {
    const { body } = await client.send(command);
    const completions = JSON.parse(new TextDecoder().decode(body));
    return completions.content[0].text;
  } catch (error) {
    console.error(error);
  }
}

//! new prompt - doesnt work
// const prompt = `
// Human: You are Highcharts Dashboard library transformer. Your task is to receive data from the user.
// Override the type of the specified field to numeric if necessary.
// Filter incoming date according to user request.
// Pass the filtered date for use in the Highcharts Dashboard configuration in JSON
// Return the Highcharts Dashboard configuration in JSON format. Try to understand the data the user provided and return the maximum suitable chart type. You can use types like: line, spline, area, areaspline, column, bar, pie, scatter.  Depending on the data the user provided add title and description for accessibility. Always use "firstRowAsNames" as false. The input it will be provided in the following format:

// You should output a Highcharts Dashboard config JSON using the provided data. If the request is not clear or can not be fulfilled, you shouldn't return anything.

// Respond only with Highcharts Dashboard JSON object end do no add any other text.
// Do not use any other data other than that provided by the user.
// Please ensure that output is valid Highcharts charts JSON object.

// Input example:
// <origin_json>[
// {Products: "Potato","July":"35","April":49,"February":47,"January":45,"June":45,"March":50,"May":44},
// {Products: "Cucumber","July":"70","April":88,"February":90,"January":90,"June":75,"March":91,"May":87},
// {Products: "Sausage","July":"150","April":145,"February":145,"January":140,"June":145,"March":143,"May":110},
// {Products: "Milk","July":"45","April":53,"February":50,"January":50,"June":49,"March":54,"May":50},
// ]
// </origin_json>
// <user_req> Sum values for all months for "milk" and "potato" in the column: "Total", use only values "milk" and "potato" and values "Total" to create a line chart</user_req>
// Response example: {
//     "dataPool": {
//       "connectors": [
//         {
//           "id": "data",
//           "type": "JSON",
//           "options": {
//             "firstRowAsNames": false,
//             "columnNames": ["Products", "Total"],
//             "data": [
//               ["Potato", 315],
//               ["Milk", 351],
//             ],
//           },
//         },
//       ],
//     },
//     "gui": {
//       "layouts": [
//         {
//           "rows": [
//             {
//               "cells": [
//                 {
//                   "id": "dashboard-col-0",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     "components": [
//       {
//         "sync": {
//           "visibility": true,
//           "highlight": true,
//           "extremes": true,
//         },
//         "connector": {
//           "id": "data",
//         },
//         "cell": "dashboard-col-0",
//         "type": "Highcharts",
//         "columnAssignment": {
//           "Products": "x",
//           "Total": "value",
//         },
//         "chartOptions": {
//           "chart": {
//             "type": "line",
//           },
//           "title": {
//             "text": "Milk and Potato Total Values",
//           },
//           "xAxis": {
//             "type": "category",
//           },
//           "yAxis": {
//             "title": {
//               "text": "Total",
//             },
//           },
//           "tooltip": {
//             "valueSuffix": "",
//           },
//           "accessibility": {
//             "description":
//               "The chart displays the total values for milk and potato products.",
//           },
//         },
//       },
//     ],
//   }

// <origin_json>
//  ${data}
// </origin_json>
// <user_req>${config}
// </user_req>`;
