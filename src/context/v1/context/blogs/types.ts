import { IBlog } from "../../../../interfaces/Blog";
import { Filters } from "../../../../interfaces/Filter";

export const SAVE_BLOGS_AND_FILTERS = "SAVE_BLOGS_AND_FILTERS";
export const UPDATE_BLOGS_AND_FILTERS = "UPDATE_BLOGS_AND_FILTERS";

export interface ISaveBlogsAndFilters {
  type: typeof SAVE_BLOGS_AND_FILTERS;
  payload: {
    blogs: Array<IBlog>;
    filters: Filters;
  }
}

export interface IUpdateBlogsAndFilters {
  type: typeof UPDATE_BLOGS_AND_FILTERS;
  payload: {
    title: string;
    value: boolean | number;
    secondValue?: number;
  }
}

export type BlogActionTypes = ISaveBlogsAndFilters | IUpdateBlogsAndFilters

export interface IBlogsState {
  defaultBlogs: Array<IBlog>;
  blogs: Array<IBlog>;
  defaultFilters: Filters;
  filters: Filters;
}

export type IBlogsContext = IBlogsState & {
  updateFilters?: (title: string, value: boolean | number, secondValue: number) => void,
  fetchBlogs?: (limit: number) => void,
}
