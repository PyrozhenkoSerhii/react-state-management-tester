import { IBlog } from "../../../../interfaces/Blog";
import { Filters } from "../../../../interfaces/Filter";

export const FETCH_BLOGS = "FETCH_BLOGS";
export const FETCH_BLOGS_SUCCESS = "FETCH_BLOGS_SUCCESS";
export const FETCH_BLOGS_ERROR = "FETCH_BLOGS_ERROR";
export const UPDATE_FILTERS = "UPDATE_FILTERS";

/**
 * Fetch blog list actions
 */
export interface IFetchBlogsAction {
  type: typeof FETCH_BLOGS;
  payload: {
    limit: number;
  }
}

export interface IFetchBlogsActionSuccess {
  type: typeof FETCH_BLOGS_SUCCESS;
  payload: {
    blogs: Array<IBlog>;
    filters: Filters;
  }
}

export interface IFetchBlogsActionError {
  type: typeof FETCH_BLOGS_ERROR;
  payload: {
    error: string;
  }
}

/**
 * Update filters actions
 */
export interface IUpdateFilters {
  type: typeof UPDATE_FILTERS;
  payload: {
    title: string;
    value: boolean | number;
    secondValue?: number;
  }
}

export type BlogActionTypes = IFetchBlogsAction
  | IFetchBlogsActionError
  | IFetchBlogsActionSuccess
  | IUpdateFilters

export interface IBlogsState {
  defaultBlogs: Array<IBlog>;
  blogs: Array<IBlog>;
  loading: boolean;
  error: string | null;
  defaultFilters: Filters;
  filters: Filters;
  case: string;
}
