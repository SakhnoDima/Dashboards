import { Chart } from "./components/chart/chart";

import { Parser } from "./components/google_parser/parser";
import { Insta_data } from "./components/insta_data/insta_data";

import { Root_dashboard } from "./components/root_dashboard/root_dashboard";

const App = () => {
  console.log(new Date(1704060000000).toISOString().substring(0, 10));
  return (
    <>
      {/* // example of a dashboard with several widgets */}
      {/* 
      <Root_dashboard /> */}
      {/* <Parser /> */}

      {/* <Chart /> */}
      <Insta_data />
    </>
  );
};

export { App };
