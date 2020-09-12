import * as React from "react";
import { observer } from "mobx-react";
import { Spin, Alert } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsAsync, updateFilers } from "../../store/blog/actions";
import { IApplicationState } from "../../store/types";

import { BlogItem } from "../../../../components/BlogItem";
import { Filters } from "../../../../components/Filters";

import { BlogListBodyWrapper, BlogListContent, BlogListHeaderWrapper, BlogListSidebar, BlogListWrapper } from "./styled";

const { useEffect } = React;

export const BlogListPage = observer((): JSX.Element => {
  const dispatch = useDispatch();

  const { blogs, error, loading, filters } = useSelector((state: IApplicationState) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogsAsync());
  }, []);

  if (loading) return <Spin />;

  if (error) {
    return (
      <Alert message={error} type="error" closable />
    );
  }

  const onFilerChange = (title: string, value: boolean | number, secondValue: number): void => {
    dispatch(updateFilers(title, value, secondValue));
  };

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
            <Filters filters={filters} onChange={onFilerChange} />
          )}
        </BlogListSidebar>
      </BlogListBodyWrapper>
    </BlogListWrapper>
  );
});
