import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "../../style/main.less";

import { BlogListPage } from "./pages/blogs";

render(
  <BrowserRouter>
    <BlogListPage />
  </BrowserRouter>,
  document.getElementById("app"),
);
