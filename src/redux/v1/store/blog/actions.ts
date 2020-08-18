import { IFetchBlogsAction, FETCH_BLOGS } from "./types";

export const fetchBlogsAsync = (): IFetchBlogsAction => ({
  type: FETCH_BLOGS,
});
