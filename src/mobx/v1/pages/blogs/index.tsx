import * as React from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import { observer } from "mobx-react";

import { blogListState } from "../../store/list";

import { ListComponent } from "./List";
import { Filters } from "../../../../components/Filters";

import { BlogListBodyWrapper, BlogListContent, BlogListHeaderWrapper, BlogListSidebar, BlogListWrapper } from "../../../../components/styled";

import { TrackerService } from "../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../shared/interfaces";

const { useContext, useEffect, useMemo } = React;

export const BlogListPage = observer((): JSX.Element => {
  const { search } = useLocation();

  const { limit } = useMemo(() => parse(search), [search]);

  const { fetchBlogList, filters, updateFilters } = useContext(blogListState);

  useEffect(() => {
    TrackerService.setTimeStamps({
      source: TrackerSources.MOBX_V1,
      position: TrackerPositions.MOBX_ACTION_INIT,
      action: TrackerActions.FETCH_BLOG_LIST,
      state: "started",
      time: Date.now(),
    });
    fetchBlogList(limit ? Number(limit) : 500);
  }, []);

  const updateBlogs = (title: string, value: boolean | number, secondValue: number) => {
    TrackerService.setTimeStamps({
      source: TrackerSources.MOBX_V1,
      position: TrackerPositions.MOBX_ACTION_INIT,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "started",
      time: Date.now(),
    });
    updateFilters(title, value, secondValue);
  };

  return (
    <BlogListWrapper>
      <BlogListHeaderWrapper />
      <BlogListBodyWrapper>
        <BlogListContent>
          <ListComponent />
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
