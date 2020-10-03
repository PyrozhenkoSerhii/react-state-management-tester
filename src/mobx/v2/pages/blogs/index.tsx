import * as React from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import { observer } from "mobx-react";
import { Spin, Alert } from "antd";

import { blogListState } from "../../store/list";
import { BlogItem } from "../../../../components/BlogItem";
import { Filters } from "../../../../components/Filters";

import { BlogListBodyWrapper, BlogListContent, BlogListHeaderWrapper, BlogListSidebar, BlogListWrapper } from "./styled";

import { TrackerService } from "../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../shared/interfaces";

const { useContext, useEffect, useState, useMemo } = React;

export const BlogListPage = observer((): JSX.Element => {
  const { search } = useLocation();

  const { limit } = useMemo(() => parse(search), [search]);

  const {
    fetchBlogList, loading, error, filters, blogs, updateFilters,
  } = useContext(blogListState);

  const [fromMobx, setFromMobx] = useState(null);

  useEffect(() => {
    TrackerService.setTimeStamps({
      source: TrackerSources.MOBX_V2,
      position: TrackerPositions.MOBX_ACTION_INIT,
      action: TrackerActions.FETCH_BLOG_LIST,
      state: "started",
      time: Date.now(),
    });
    fetchBlogList(limit ? Number(limit) : 200);
    setFromMobx(TrackerActions.FETCH_BLOG_LIST);
  }, []);

  useEffect(() => {
    if (fromMobx === TrackerActions.FETCH_BLOG_LIST) {
      TrackerService.setTimeStamps({
        source: TrackerSources.MOBX_V2,
        position: TrackerPositions.MOBX_ACTION_COMMIT,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "finished",
        time: Date.now(),
      });
      setFromMobx(null);
    } else if (fromMobx === TrackerActions.CHECKBOX_FILTER) {
      TrackerService.setTimeStamps({
        source: TrackerSources.MOBX_V2,
        position: TrackerPositions.MOBX_ACTION_COMMIT,
        action: TrackerActions.CHECKBOX_FILTER,
        state: "finished",
        time: Date.now(),
        affectedItems: blogs.length,
      });
      setFromMobx(null);
    }
  }, [blogs]);

  if (loading) return <Spin />;

  if (error) {
    return (
      <Alert message={error} type="error" closable />
    );
  }

  const updateBlogs = (title: string, value: boolean | number, secondValue: number) => {
    TrackerService.setTimeStamps({
      source: TrackerSources.MOBX_V2,
      position: TrackerPositions.MOBX_ACTION_INIT,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "started",
      time: Date.now(),
    });
    updateFilters(title, value, secondValue);
    setFromMobx(TrackerActions.CHECKBOX_FILTER);
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
            <Filters filters={filters} onChange={updateBlogs} />
          )}
        </BlogListSidebar>
      </BlogListBodyWrapper>
    </BlogListWrapper>
  );
});
