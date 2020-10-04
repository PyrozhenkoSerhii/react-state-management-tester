import { ISaveBlogsAndFilters, SAVE_BLOGS_AND_FILTERS, IUpdateBlogsAndFilters, UPDATE_BLOGS_AND_FILTERS } from "./types";
import { IBlog } from "../../../../interfaces/Blog";
import { Filters } from "../../../../interfaces/Filter";

export const saveBlogsAndFilters = (
  blogs: Array<IBlog>, filters: Filters,
): ISaveBlogsAndFilters => ({
  type: SAVE_BLOGS_AND_FILTERS,
  payload: {
    blogs,
    filters,
  },
});

export const updateBlogsAndFilters = (
  title: string,
  value: boolean | number,
  secondValue: number = null,
): IUpdateBlogsAndFilters => ({
  type: UPDATE_BLOGS_AND_FILTERS,
  payload: {
    title,
    value,
    secondValue,
  },
});
