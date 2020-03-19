// @flow

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


const App = () => (
  <div>Redux v1 App</div>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app"),
);
