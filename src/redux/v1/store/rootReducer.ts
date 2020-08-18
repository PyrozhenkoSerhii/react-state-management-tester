import { Reducer, combineReducers, AnyAction } from "redux";
import { IApplicationState } from "./types";

import { blogsReducer } from "./blog/reducers";

export const rootReducer: Reducer<IApplicationState, AnyAction> = combineReducers({
  blogs: blogsReducer,
});
