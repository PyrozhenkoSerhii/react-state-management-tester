import {
  call, put, all, takeEvery,
} from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import * as BlogTypes from "./types";

import { fetchBlogList } from "../../../../axios/blogs";
import { IBlog } from "../../../../interfaces/Blog";

function* fetchBlogsAsync(): SagaIterator {
  try {
    const blogs: Array<IBlog> = yield call(fetchBlogList);

    yield put<BlogTypes.IFetchBlogsActionSuccess>({
      type: BlogTypes.FETCH_BLOGS_SUCCESS,
      payload: { blogs },
    });
  } catch (err) {
    yield put<BlogTypes.IFetchBlogsActionError>({
      type: BlogTypes.FETCH_BLOGS_ERROR,
      payload: { error: err },
    });
  }
}

function* fetchBlogsWatcher() {
  yield takeEvery(BlogTypes.FETCH_BLOGS, fetchBlogsAsync);
}

export function* rootBlogSaga(): SagaIterator {
  yield all([
    call(fetchBlogsWatcher),
  ]);
}
