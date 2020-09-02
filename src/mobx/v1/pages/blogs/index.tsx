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

export const BlogListPage = observer((): JSX.Element => {
  const {
    fetchBlogList, loading, error, filters, blogs, updateFilters,
  } = useContext(blogListState);

  useEffect(() => {
    fetchBlogList();
  }, []);

  if (loading) return <Spin />;

  if (error) {
    return (
      <Alert message={error} type="error" closable />
    );
  }

  return (
    <BlogListWrapper>
      <BlogListHeaderWrapper />
      <BlogListBodyWrapper>
        <BlogListContent>
          {blogs && blogs.map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </BlogListContent>
        <BlogListSidebar>
          {filters && (
            <Filters filters={filters} onChange={updateFilters} />
          )}
        </BlogListSidebar>
      </BlogListBodyWrapper>
    </BlogListWrapper>
  );
});
