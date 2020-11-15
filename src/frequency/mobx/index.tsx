import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "../../style/main.less";

import { FirstComponent } from "./First";
import { SecondComponent } from "./Second";

const App = () => (
  <>
    <FirstComponent />
    <SecondComponent />
    <SecondComponent />
  </>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app"),
);
