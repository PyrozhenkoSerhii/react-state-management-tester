import {
  BlogActionTypes,
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  IBlogsState,
} from "./types";

const initialState: IBlogsState = {
  blogs: [],
  loading: true,
  error: null,
};

export const blogsReducer = (
  state = initialState,
  action: BlogActionTypes,
): IBlogsState => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        blogs: action.payload.blogs,
      };
    case FETCH_BLOGS_ERROR:
      return {
        ...state,
        blogs: [],
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
