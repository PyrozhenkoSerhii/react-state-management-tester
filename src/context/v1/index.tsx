import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { BlogsStore } from "./context/blogs/store";
import { BlogListPage } from "./pages/blogs";

import "../../style/main.less";

ReactDOM.render(
  <BrowserRouter>
    <BlogsStore>
      <BlogListPage />
    </BlogsStore>
  </BrowserRouter>,
  document.getElementById("app"),
);
