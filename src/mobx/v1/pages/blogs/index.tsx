import * as React from "react";
import { observer } from "mobx-react";
import { Spin, Alert } from "antd";

import { blogListState } from "../../store/list";
import { BlogItem } from "../../../../components/BlogItem/index";

const { useContext, useEffect } = React;

export const BlogListPage = observer(() => {
  const store = useContext(blogListState);

  useEffect(() => {
    store.fetchBlogList();
  }, []);

  if (store.loading) return <Spin />;

  if (store.error) {
    return (
      <Alert message={store.error} type="error" closable />
    );
  }

  return (
    <div>
      {store.blogs && store.blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
});
