import { IBlog } from "../../../../interfaces/Blog";

export const FETCH_BLOGS = "FETCH_BLOGS";
export const FETCH_BLOGS_SUCCESS = "FETCH_BLOGS_SUCCESS";
export const FETCH_BLOGS_ERROR = "FETCH_BLOGS_ERROR";

export interface IFetchBlogsAction {
  type: typeof FETCH_BLOGS;
}

export interface IFetchBlogsActionSuccess {
  type: typeof FETCH_BLOGS_SUCCESS;
  payload: {
    blogs: Array<IBlog>;
  }
}

export interface IFetchBlogsActionError {
  type: typeof FETCH_BLOGS_ERROR;
  payload: {
    error: string;
  }
}

export type BlogActionTypes = IFetchBlogsAction | IFetchBlogsActionError | IFetchBlogsActionSuccess


export interface IBlogsState {
  blogs: Array<IBlog>;
  loading: boolean;
  error: string | null;
}
