import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";
import { rootBlogSaga } from "./blog/saga";

export function* rootSaga(): SagaIterator {
  yield all([
    call(rootBlogSaga),
  ]);
}
