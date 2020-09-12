import * as React from "react";
import { Spin, Alert } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsAsync, updateFilters } from "../../store/blog/actions";
import { IApplicationState } from "../../store/types";

import { BlogItem } from "../../../../components/BlogItem";
import { Filters } from "../../../../components/Filters";
import { TrackerService } from "../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../shared/interfaces";

import { BlogListBodyWrapper, BlogListContent, BlogListHeaderWrapper, BlogListSidebar, BlogListWrapper } from "./styled";

const { useEffect, useState } = React;

export const BlogListPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { blogs, error, loading, filters } = useSelector((state: IApplicationState) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogsAsync());
  }, []);


  const [fromRedux, setFromRedux] = useState(false);
  useEffect(() => {
    if (fromRedux) {
      TrackerService.setTimeStamps({
        source: TrackerSources.ReduxV1,
        position: TrackerPositions.ReduxCommit,
        action: TrackerActions.FilterBlogList,
        state: "finished",
        timestamp: Date.now(),
      });
      setFromRedux(false);
    }
  }, [blogs]);

  const onFilerChange = (title: string, value: boolean | number, secondValue: number): void => {
    TrackerService.setTimeStamps({
      source: TrackerSources.ReduxV1,
      position: TrackerPositions.ReduxReduce,
      action: TrackerActions.FilterBlogList,
      state: "started",
      timestamp: Date.now(),
    });
    dispatch(updateFilters(title, value, secondValue));
    setFromRedux(true);
  };

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
            <Filters filters={filters} onChange={onFilerChange} />
          )}
        </BlogListSidebar>
      </BlogListBodyWrapper>
    </BlogListWrapper>
  );
};
