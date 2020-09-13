import * as React from "react";
import { observer } from "mobx-react";
import { Spin, Alert } from "antd";

import { blogListState } from "../../store/list";
import { BlogItem } from "../../../../components/BlogItem";
import { Filters } from "../../../../components/Filters";

import { BlogListBodyWrapper, BlogListContent, BlogListHeaderWrapper, BlogListSidebar, BlogListWrapper } from "./styled";

import { TrackerService } from "../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../shared/interfaces";

const { useContext, useEffect, useState } = React;

export const BlogListPage = observer((): JSX.Element => {
  const {
    fetchBlogList, loading, error, filters, blogs, updateFilters,
  } = useContext(blogListState);

  const [fromMobx, setFromMobx] = useState(null);

  useEffect(() => {
    TrackerService.setTimeStamps({
      source: TrackerSources.MobxV1,
      position: TrackerPositions.MobxActionInit,
      action: TrackerActions.FetchBlogList,
      state: "started",
      timestamp: Date.now(),
    });
    fetchBlogList();
    setFromMobx(TrackerActions.FetchBlogList);
  }, []);

  useEffect(() => {
    if (fromMobx) {
      TrackerService.setTimeStamps({
        source: TrackerSources.MobxV1,
        position: TrackerPositions.MobxActionCommit,
        action: TrackerActions.FetchBlogList,
        state: "finished",
        timestamp: Date.now(),
      });
    }
  }, [blogs]);

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
