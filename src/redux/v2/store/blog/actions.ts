import { IFetchBlogsAction, FETCH_BLOGS, IUpdateFilters, UPDATE_FILTERS } from "./types";

export const fetchBlogsAsync = (limit: number): IFetchBlogsAction => ({
  type: FETCH_BLOGS,
  payload: { limit },
});

export const updateFilters = (
  title: string,
  value: boolean | number,
  secondValue: number = null,
): IUpdateFilters => ({
  type: UPDATE_FILTERS,
  payload: {
    title,
    value,
    secondValue,
  },
});
