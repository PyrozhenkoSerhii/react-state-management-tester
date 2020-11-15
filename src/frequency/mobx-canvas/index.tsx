import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { VideosWrapper } from "../styled";

import "../../style/main.less";

import { FirstComponent } from "./First";
import { SecondComponent } from "./Second";

const App = () => (
  <VideosWrapper>
    <FirstComponent />
    <SecondComponent />
  </VideosWrapper>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app"),
);
