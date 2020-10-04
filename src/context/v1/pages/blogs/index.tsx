import * as React from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";

import { BlogsContext } from "../../context/blogs/store";

import { ListComponent } from "./List";
import { Filters } from "../../../../components/Filters";
import { BlogListBodyWrapper, BlogListContent, BlogListHeaderWrapper, BlogListSidebar, BlogListWrapper } from "../../../../components/styled";

import { TrackerService } from "../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../shared/interfaces";

const { useContext, useEffect, useMemo } = React;

export const BlogListPage = (): JSX.Element => {
  const { search } = useLocation();

  const { limit } = useMemo(() => parse(search), [search]);

  const { updateFilters, filters, fetchBlogs } = useContext(BlogsContext);

  useEffect(() => {
    TrackerService.setTimeStamps({
      source: TrackerSources.CONTEXT_V1,
      position: TrackerPositions.CONTEXT_INIT,
      action: TrackerActions.FETCH_BLOG_LIST,
      state: "started",
      time: Date.now(),
    });
    fetchBlogs(limit ? Number(limit) : 500);
  }, []);

  const updateBlogs = (title: string, value: boolean | number, secondValue: number) => {
    TrackerService.setTimeStamps({
      source: TrackerSources.CONTEXT_V1,
      position: TrackerPositions.CONTEXT_INIT,
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
};
