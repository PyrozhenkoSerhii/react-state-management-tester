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

import * as Types from "../dummy/types";

import { TrackerService } from "../../../../services/tracker";
import { TrackerSources, TrackerActions, TrackerPositions } from "../../../../../shared/interfaces";

const initialState: IBlogsState = {
  defaultBlogs: [],
  blogs: [],
  defaultFilters: [],
  filters: [],
  loading: true,
  error: null,
  case: "",
};

export const blogsReducer = (
  state = initialState,
  action: BlogActionTypes | any,
): IBlogsState => {
  switch (action.type) {
    case Types.DUMMY_CASE_1: return { ...state, case: Types.DUMMY_CASE_1 };
    case Types.DUMMY_CASE_2: return { ...state, case: Types.DUMMY_CASE_2 };
    case Types.DUMMY_CASE_3: return { ...state, case: Types.DUMMY_CASE_3 };
    case Types.DUMMY_CASE_4: return { ...state, case: Types.DUMMY_CASE_4 };
    case Types.DUMMY_CASE_5: return { ...state, case: Types.DUMMY_CASE_5 };
    case Types.DUMMY_CASE_6: return { ...state, case: Types.DUMMY_CASE_6 };
    case Types.DUMMY_CASE_7: return { ...state, case: Types.DUMMY_CASE_7 };
    case Types.DUMMY_CASE_8: return { ...state, case: Types.DUMMY_CASE_8 };
    case Types.DUMMY_CASE_9: return { ...state, case: Types.DUMMY_CASE_9 };
    case Types.DUMMY_CASE_10: return { ...state, case: Types.DUMMY_CASE_10 };
    case Types.DUMMY_CASE_11: return { ...state, case: Types.DUMMY_CASE_11 };
    case Types.DUMMY_CASE_12: return { ...state, case: Types.DUMMY_CASE_12 };
    case Types.DUMMY_CASE_13: return { ...state, case: Types.DUMMY_CASE_13 };
    case Types.DUMMY_CASE_14: return { ...state, case: Types.DUMMY_CASE_14 };
    case Types.DUMMY_CASE_15: return { ...state, case: Types.DUMMY_CASE_15 };
    case Types.DUMMY_CASE_16: return { ...state, case: Types.DUMMY_CASE_16 };
    case Types.DUMMY_CASE_17: return { ...state, case: Types.DUMMY_CASE_17 };
    case Types.DUMMY_CASE_18: return { ...state, case: Types.DUMMY_CASE_18 };
    case Types.DUMMY_CASE_19: return { ...state, case: Types.DUMMY_CASE_19 };
    case Types.DUMMY_CASE_20: return { ...state, case: Types.DUMMY_CASE_20 };
    case Types.DUMMY_CASE_21: return { ...state, case: Types.DUMMY_CASE_21 };
    case Types.DUMMY_CASE_22: return { ...state, case: Types.DUMMY_CASE_22 };
    case Types.DUMMY_CASE_23: return { ...state, case: Types.DUMMY_CASE_23 };
    case Types.DUMMY_CASE_24: return { ...state, case: Types.DUMMY_CASE_24 };
    case Types.DUMMY_CASE_25: return { ...state, case: Types.DUMMY_CASE_25 };
    case Types.DUMMY_CASE_26: return { ...state, case: Types.DUMMY_CASE_26 };
    case Types.DUMMY_CASE_27: return { ...state, case: Types.DUMMY_CASE_27 };
    case Types.DUMMY_CASE_28: return { ...state, case: Types.DUMMY_CASE_28 };
    case Types.DUMMY_CASE_29: return { ...state, case: Types.DUMMY_CASE_29 };
    case Types.DUMMY_CASE_30: return { ...state, case: Types.DUMMY_CASE_30 };
    case Types.SECOND_DUMMY_CASE_1: return { ...state, case: Types.SECOND_DUMMY_CASE_1 };
    case Types.SECOND_DUMMY_CASE_2: return { ...state, case: Types.SECOND_DUMMY_CASE_2 };
    case Types.SECOND_DUMMY_CASE_3: return { ...state, case: Types.SECOND_DUMMY_CASE_3 };
    case Types.SECOND_DUMMY_CASE_4: return { ...state, case: Types.SECOND_DUMMY_CASE_4 };
    case Types.SECOND_DUMMY_CASE_5: return { ...state, case: Types.SECOND_DUMMY_CASE_5 };
    case Types.SECOND_DUMMY_CASE_6: return { ...state, case: Types.SECOND_DUMMY_CASE_6 };
    case Types.SECOND_DUMMY_CASE_7: return { ...state, case: Types.SECOND_DUMMY_CASE_7 };
    case Types.SECOND_DUMMY_CASE_8: return { ...state, case: Types.SECOND_DUMMY_CASE_8 };
    case Types.SECOND_DUMMY_CASE_9: return { ...state, case: Types.SECOND_DUMMY_CASE_9 };
    case Types.SECOND_DUMMY_CASE_10: return { ...state, case: Types.SECOND_DUMMY_CASE_10 };
    case Types.SECOND_DUMMY_CASE_11: return { ...state, case: Types.SECOND_DUMMY_CASE_11 };
    case Types.SECOND_DUMMY_CASE_12: return { ...state, case: Types.SECOND_DUMMY_CASE_12 };
    case Types.SECOND_DUMMY_CASE_13: return { ...state, case: Types.SECOND_DUMMY_CASE_13 };
    case Types.SECOND_DUMMY_CASE_14: return { ...state, case: Types.SECOND_DUMMY_CASE_14 };
    case Types.SECOND_DUMMY_CASE_15: return { ...state, case: Types.SECOND_DUMMY_CASE_15 };
    case Types.SECOND_DUMMY_CASE_16: return { ...state, case: Types.SECOND_DUMMY_CASE_16 };
    case Types.SECOND_DUMMY_CASE_17: return { ...state, case: Types.SECOND_DUMMY_CASE_17 };
    case Types.SECOND_DUMMY_CASE_18: return { ...state, case: Types.SECOND_DUMMY_CASE_18 };
    case Types.SECOND_DUMMY_CASE_19: return { ...state, case: Types.SECOND_DUMMY_CASE_19 };
    case Types.SECOND_DUMMY_CASE_20: return { ...state, case: Types.SECOND_DUMMY_CASE_20 };
    case Types.SECOND_DUMMY_CASE_21: return { ...state, case: Types.SECOND_DUMMY_CASE_21 };
    case Types.SECOND_DUMMY_CASE_22: return { ...state, case: Types.SECOND_DUMMY_CASE_22 };
    case Types.SECOND_DUMMY_CASE_23: return { ...state, case: Types.SECOND_DUMMY_CASE_23 };
    case Types.SECOND_DUMMY_CASE_24: return { ...state, case: Types.SECOND_DUMMY_CASE_24 };
    case Types.SECOND_DUMMY_CASE_25: return { ...state, case: Types.SECOND_DUMMY_CASE_25 };
    case Types.SECOND_DUMMY_CASE_26: return { ...state, case: Types.SECOND_DUMMY_CASE_26 };
    case Types.SECOND_DUMMY_CASE_27: return { ...state, case: Types.SECOND_DUMMY_CASE_27 };
    case Types.SECOND_DUMMY_CASE_28: return { ...state, case: Types.SECOND_DUMMY_CASE_28 };
    case Types.SECOND_DUMMY_CASE_29: return { ...state, case: Types.SECOND_DUMMY_CASE_29 };
    case Types.SECOND_DUMMY_CASE_30: return { ...state, case: Types.SECOND_DUMMY_CASE_30 };
    case FETCH_BLOGS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOGS_SUCCESS:
      TrackerService.setTimeStamps({
        source: TrackerSources.REDUX_V2,
        position: TrackerPositions.REDUX_REDUCE,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "finished",
        time: Date.now(),
      });

      TrackerService.setTimeStamps({
        source: TrackerSources.REDUX_V2,
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
        source: TrackerSources.REDUX_V2,
        position: TrackerPositions.REDUX_REDUCE,
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
        source: TrackerSources.REDUX_V2,
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
