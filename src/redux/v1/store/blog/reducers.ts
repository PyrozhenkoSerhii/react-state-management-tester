import {
  BlogActionTypes,
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  UPDATE_FILTERS,
  IBlogsState,
} from "./types";
import { isBooleanFilter, isRangeFilter, isValueFilter } from "../../../../interfaces/Filter";
import { isBlogPasses } from "../../../../utils/filters";

import { TrackerService } from "../../../../services/tracker";
import { TrackerSources, TrackerActions, TrackerPositions } from "../../../../../shared/interfaces";

const initialState: IBlogsState = {
  defaultBlogs: [],
  blogs: [],
  defaultFilters: [],
  filters: [],
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
      TrackerService.setTimeStamps({
        source: TrackerSources.REDUX_V1,
        position: TrackerPositions.REDUX_DISPATCH_REDUCER,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "finished",
        time: Date.now(),
      });

      TrackerService.setTimeStamps({
        source: TrackerSources.REDUX_V1,
        position: TrackerPositions.REDUX_COMMIT,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "started",
        time: Date.now(),
        affectedItems: action.payload.blogs.length,
      });

      return {
        ...state,
        loading: false,
        error: null,
        blogs: action.payload.blogs,
        defaultBlogs: action.payload.blogs,
        filters: action.payload.filters,
        defaultFilters: action.payload.filters,
      };
    case FETCH_BLOGS_ERROR:
      return {
        ...state,
        blogs: [],
        defaultFilters: [],
        filters: [],
        defaultBlogs: [],
        loading: false,
        error: action.payload.error,
      };
    case UPDATE_FILTERS: {
      TrackerService.setTimeStamps({
        source: TrackerSources.REDUX_V1,
        position: TrackerPositions.REDUX_DISPATCH_REDUCER,
        action: TrackerActions.CHECKBOX_FILTER,
        state: "finished",
        time: Date.now(),
      });

      const { title, value, secondValue } = action.payload;

      const filters = state.filters.map((filter) => {
        if (filter.title !== title) return filter;
        const updated = JSON.parse(JSON.stringify(filter));

        if (isBooleanFilter(updated)) {
          updated.value = !updated.value;
        } else if (isValueFilter(updated)) {
          updated.value = Number(value);
        } else if (isRangeFilter(updated)) {
          updated.min = Number(value);
          updated.max = Number(secondValue);
        }

        return updated;
      });

      const blogs = state.defaultBlogs.map(
        (blog) => (isBlogPasses(blog, filters) ? blog : null),
      ).filter(Boolean);

      TrackerService.setTimeStamps({
        source: TrackerSources.REDUX_V1,
        position: TrackerPositions.REDUX_COMMIT,
        action: TrackerActions.CHECKBOX_FILTER,
        state: "started",
        time: Date.now(),
        affectedItems: blogs.length,
      });

      return {
        ...state,
        blogs,
        filters,
      };
    }
    default:
      return state;
  }
};
