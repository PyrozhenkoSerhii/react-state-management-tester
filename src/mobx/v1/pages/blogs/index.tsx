import * as React from "react";
import { observer } from "mobx-react";
import { Spin, Alert } from "antd";

import { blogListState } from "../../store/list";
import { BlogItem } from "../../../../components/BlogItem/index";

import {
  BlogListBodyWrapper, BlogListContent, BlogListHeaderWrapper, BlogListSidebar, BlogListWrapper,
} from "./styled";

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
    <BlogListWrapper>
      <BlogListHeaderWrapper />
      <BlogListBodyWrapper>
        <BlogListSidebar />
        <BlogListContent>
          {store.defaultBlogs && store.defaultBlogs.map((blog) => (
            <BlogItem blog={blog} />
          ))}
        </BlogListContent>
      </BlogListBodyWrapper>
    </BlogListWrapper>
  );
});
