import { Chart } from "./components/chart/chart";

import { Parser } from "./components/google_parser/parser";
import { Root_dashboard } from "./components/root_dashboard/root_dashboard";
import TestWidget from "./components/widgets/test_widget.jsx";

const App = () => {
  return (
    <>
      {/* // example of a dashboard with several widgets */}
      {/* 
      <Root_dashboard /> */}
      {/* <Parser /> */}

      <TestWidget />
    </>
  );
};

export { App };
