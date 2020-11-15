import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { FrequencyStore } from "./store";
import { VideosWrapper } from "../styled";

import "../../style/main.less";

import { FirstComponent } from "./First";
import { SecondComponent } from "./Second";

const App = () => (
  <FrequencyStore>
    <VideosWrapper>
      <FirstComponent />
      <SecondComponent />
    </VideosWrapper>
  </FrequencyStore>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app"),
);
