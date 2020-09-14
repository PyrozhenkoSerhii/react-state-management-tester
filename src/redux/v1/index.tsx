import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import "../../style/main.less";

import { BlogListPage } from "./pages/blogs";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <BlogListPage />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app"),
);
