import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "../style/main.less";

import { ChartPage } from "./pages/chart";

ReactDOM.render(
  <BrowserRouter>
    <ChartPage />
  </BrowserRouter>,
  document.getElementById("app"),
);
