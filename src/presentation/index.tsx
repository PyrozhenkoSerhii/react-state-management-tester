import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "../style/main.less";

import { ChartPage } from "./pages/chart";

ReactDOM.render(
  <BrowserRouter>
    <ChartPage id={1} />
    <ChartPage id={2} />
  </BrowserRouter>,
  document.getElementById("app"),
);
