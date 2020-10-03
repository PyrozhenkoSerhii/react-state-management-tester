import { Reducer, combineReducers, AnyAction } from "redux";
import { IApplicationState } from "./types";

import { blogsReducer } from "./blog/reducers";
import {
  dummyReducer1, dummyReducer2, dummyReducer3, dummyReducer4,
  dummyReducer5, dummyReducer10, dummyReducer6, dummyReducer7, dummyReducer8, dummyReducer9,
} from "./dummy/reducers";

export const rootReducer: Reducer<IApplicationState, AnyAction> = combineReducers({
  dummy_one: dummyReducer1,
  dummy_two: dummyReducer2,
  dummy_three: dummyReducer3,
  dummy_four: dummyReducer4,
  dummy_five: dummyReducer5,
  dummy_six: dummyReducer6,
  dummy_seven: dummyReducer7,
  dummy_eight: dummyReducer8,
  dummy_nine: dummyReducer9,
  dummy_ten: dummyReducer10,
  blogs: blogsReducer,
});
