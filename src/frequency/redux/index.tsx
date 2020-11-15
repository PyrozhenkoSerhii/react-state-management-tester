import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import "../../style/main.less";

import { FirstComponent } from "./First";
import { SecondComponent } from "./Second";

const App = () => (
  <Provider store={store}>
    <FirstComponent />
    <SecondComponent />
    <SecondComponent />
  </Provider>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app"),
);
