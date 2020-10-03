import { Reducer, combineReducers, AnyAction } from "redux";
import { IApplicationState } from "./types";

import { blogsReducer } from "./blog/reducers";
import { dummyReducer1, dummyReducer2, dummyReducer3, dummyReducer4, dummyReducer5 } from "./dummy/reducers";

export const rootReducer: Reducer<IApplicationState, AnyAction> = combineReducers({
  blogs: blogsReducer,
  dummy1: dummyReducer1,
  dummy2: dummyReducer2,
  dummy3: dummyReducer3,
  dummy4: dummyReducer4,
  dummy5: dummyReducer5,
});
