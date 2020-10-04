import * as React from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";

import { blogsReducer, initialState } from "./reducer";
import { IBlogsContext } from "./types";
import { saveBlogsAndFilters, updateBlogsAndFilters } from "./actions";

import { generateFilters } from "../../../../utils/filters";
import { fetchBlogList } from "../../../../axios/blogs";

const { createContext, useReducer, useEffect, useMemo } = React;

const defaultContext: IBlogsContext = { ...initialState };

export const BlogsContext = createContext(defaultContext);

export const BlogsStore = ({ children }: {children: React.ReactNode}): JSX.Element => {
  const { search } = useLocation();
  const { limit } = useMemo(() => parse(search), [search]);

  const [state, dispatch] = useReducer(blogsReducer, initialState);

  const fetchBlogsAsync = async () => {
    try {
      const blogs = await fetchBlogList({ limit: limit ? Number(limit) : 500 });
      const filters = generateFilters(blogs);

      dispatch(saveBlogsAndFilters(blogs, filters));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogsAsync();
  }, []);

  const updateFilters = (title: string, value: boolean | number, secondValue: number): void => {
    dispatch(updateBlogsAndFilters(title, value, secondValue));
  };

  return (
    <BlogsContext.Provider value={{
      ...state,
      updateFilters,
    }}
    >
      {children}
    </BlogsContext.Provider>
  );
};
