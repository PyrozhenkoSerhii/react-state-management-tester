import * as React from "react";
import { Spin, Alert } from "antd";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsAsync, updateFilters } from "../../store/blog/actions";
import { IApplicationState } from "../../store/types";

import { BlogItem } from "../../../../components/BlogItem";
import { Filters } from "../../../../components/Filters";
import { TrackerService } from "../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../shared/interfaces";

import { BlogListBodyWrapper, BlogListContent, BlogListHeaderWrapper, BlogListSidebar, BlogListWrapper } from "./styled";

const { useEffect, useState, useMemo } = React;

export const BlogListPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { search } = useLocation();

  const { limit } = useMemo(() => parse(search), [search]);

  const { blogs, error, loading, filters } = useSelector((state: IApplicationState) => state.blogs);

  const [fromRedux, setFromRedux] = useState(null);
  useEffect(() => {
    TrackerService.setTimeStamps({
      source: TrackerSources.REDUX_V2,
      position: TrackerPositions.REDUX_SAGA,
      action: TrackerActions.FETCH_BLOG_LIST,
      state: "started",
      time: Date.now(),
    });
    dispatch(fetchBlogsAsync(limit ? Number(limit) : 200));
    setFromRedux(TrackerActions.FETCH_BLOG_LIST);
  }, []);

  useEffect(() => {
    if (fromRedux === TrackerActions.CHECKBOX_FILTER) {
      TrackerService.setTimeStamps({
        source: TrackerSources.REDUX_V2,
        position: TrackerPositions.REDUX_COMMIT,
        action: TrackerActions.CHECKBOX_FILTER,
        state: "finished",
        time: Date.now(),
      });
      setFromRedux(null);
    }
    if (fromRedux === TrackerActions.FETCH_BLOG_LIST) {
      TrackerService.setTimeStamps({
        source: TrackerSources.REDUX_V2,
        position: TrackerPositions.REDUX_COMMIT,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "finished",
        time: Date.now(),
      });
      setFromRedux(null);
    }
  }, [blogs]);

  const onFilerChange = (title: string, value: boolean | number, secondValue: number): void => {
    TrackerService.setTimeStamps({
      source: TrackerSources.REDUX_V2,
      position: TrackerPositions.REDUX_REDUCE,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "started",
      time: Date.now(),
    });
    dispatch(updateFilters(title, value, secondValue));
    setFromRedux(TrackerActions.CHECKBOX_FILTER);
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
