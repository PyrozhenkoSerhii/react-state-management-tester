import * as React from "react";
import { observer } from "mobx-react";
import { Spin, Alert } from "antd";

import { blogListState } from "../../store/list";
import { BlogItem } from "../../../../components/BlogItem";
import { Filters } from "../../../../components/Filters";

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
        <BlogListContent>
          {store.blogs && store.blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </BlogListContent>
        <BlogListSidebar>
          {store.filters && (
            <Filters filters={store.filters} onChange={store.updateFilters} />
          )}
        </BlogListSidebar>
      </BlogListBodyWrapper>
    </BlogListWrapper>
  );
});
