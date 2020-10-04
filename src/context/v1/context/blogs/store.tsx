import * as React from "react";

import { blogsReducer, initialState } from "./reducer";
import { IBlogsContext } from "./types";
import { saveBlogsAndFilters, updateBlogsAndFilters } from "./actions";

import { generateFilters } from "../../../../utils/filters";
import { fetchBlogList } from "../../../../axios/blogs";

import { TrackerService } from "../../../../services/tracker";
import { TrackerSources, TrackerActions, TrackerPositions } from "../../../../../shared/interfaces";

const { createContext, useReducer } = React;

const defaultContext: IBlogsContext = { ...initialState };

export const BlogsContext = createContext(defaultContext);

export const BlogsStore = ({ children }: {children: React.ReactNode}): JSX.Element => {
  const [state, dispatch] = useReducer(blogsReducer, initialState);

  const fetchBlogs = async (limit: number) => {
    TrackerService.setTimeStamps({
      source: TrackerSources.CONTEXT_V1,
      position: TrackerPositions.CONTEXT_INIT,
      action: TrackerActions.FETCH_BLOG_LIST,
      state: "finished",
      time: Date.now(),
    });

    try {
      const blogs = await fetchBlogList({ limit });
      const filters = generateFilters(blogs);

      TrackerService.setTimeStamps({
        source: TrackerSources.CONTEXT_V1,
        position: TrackerPositions.CONTEXT_DISPATCH_REDUCER,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "started",
        time: Date.now(),
      });

      dispatch(saveBlogsAndFilters(blogs, filters));
    } catch (err) {
      console.log(err);
    }
  };

  const updateFilters = (title: string, value: boolean | number, secondValue: number): void => {
    TrackerService.setTimeStamps({
      source: TrackerSources.CONTEXT_V1,
      position: TrackerPositions.CONTEXT_INIT,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "finished",
      time: Date.now(),
    });

    TrackerService.setTimeStamps({
      source: TrackerSources.CONTEXT_V1,
      position: TrackerPositions.CONTEXT_DISPATCH_REDUCER,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "started",
      time: Date.now(),
    });

    dispatch(updateBlogsAndFilters(title, value, secondValue));
  };

  return (
    <BlogsContext.Provider value={{
      ...state,
      updateFilters,
      fetchBlogs,
    }}
    >
      {children}
    </BlogsContext.Provider>
  );
};
