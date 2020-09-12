import { IFetchBlogsAction, FETCH_BLOGS, IUpdateFilters, UPDATE_FILTERS } from "./types";

export const fetchBlogsAsync = (): IFetchBlogsAction => ({
  type: FETCH_BLOGS,
});

export const updateFilers = (
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
