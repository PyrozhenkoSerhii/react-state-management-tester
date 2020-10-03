import * as React from "react";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsAsync, updateFilters } from "../../store/blog/actions";
import { IApplicationState } from "../../store/types";

import { ListComponent } from "./List";
import { Filters } from "../../../../components/Filters";
import { TrackerService } from "../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../shared/interfaces";

import { BlogListBodyWrapper, BlogListContent, BlogListHeaderWrapper, BlogListSidebar, BlogListWrapper } from "../../../../components/styled";

const { useEffect, useMemo } = React;

export const BlogListPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { search } = useLocation();

  const { limit } = useMemo(() => parse(search), [search]);

  const { filters } = useSelector((state: IApplicationState) => state.blogs);

  useEffect(() => {
    TrackerService.setTimeStamps({
      source: TrackerSources.REDUX_V1,
      position: TrackerPositions.REDUX_SAGA,
      action: TrackerActions.FETCH_BLOG_LIST,
      state: "started",
      time: Date.now(),
    });
    dispatch(fetchBlogsAsync(limit ? Number(limit) : 500));
  }, []);

  const onFilerChange = (title: string, value: boolean | number, secondValue: number): void => {
    TrackerService.setTimeStamps({
      source: TrackerSources.REDUX_V1,
      position: TrackerPositions.REDUX_REDUCE,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "started",
      time: Date.now(),
    });
    dispatch(updateFilters(title, value, secondValue));
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
            <Filters filters={filters} onChange={onFilerChange} />
          )}
        </BlogListSidebar>
      </BlogListBodyWrapper>
    </BlogListWrapper>
  );
};
