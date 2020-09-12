import {
  call, put, all, takeEvery,
} from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import * as BlogTypes from "./types";

import { fetchBlogList } from "../../../../axios/blogs";
import { IAxiosResponse } from "../../../../interfaces/AxiosResponse";
import { IBlog } from "../../../../interfaces/Blog";

function* fetchBlogsAsync(): SagaIterator {
  const { data, error }: IAxiosResponse<Array<IBlog>> = yield call(fetchBlogList);


  if (error) {
    yield put<BlogTypes.IFetchBlogsActionError>({
      type: BlogTypes.FETCH_BLOGS_ERROR,
      payload: { error },
    });
  } else {
    yield put<BlogTypes.IFetchBlogsActionSuccess>({
      type: BlogTypes.FETCH_BLOGS_SUCCESS,
      payload: { blogs: data },
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
