import { call, put, all, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import * as BlogTypes from "./types";
import { fetchBlogList } from "../../../../axios/blogs";
import { IBlog } from "../../../../interfaces/Blog";
import { generateFilters } from "../../../../utils/filters";

import { TrackerService } from "../../../../services/tracker";
import { TrackerSources, TrackerActions, TrackerPositions } from "../../../../../shared/interfaces";

function* fetchBlogsAsync(): SagaIterator {
  try {
    TrackerService.setTimeStamps({
      source: TrackerSources.REDUX_V1,
      position: TrackerPositions.REDUX_SAGA,
      action: TrackerActions.FETCH_BLOG_LIST,
      state: "finished",
      time: Date.now(),
    });
    const blogs: Array<IBlog> = yield call(fetchBlogList);

    const filters = generateFilters(blogs);

    TrackerService.setTimeStamps({
      source: TrackerSources.REDUX_V1,
      position: TrackerPositions.REDUX_REDUCE,
      action: TrackerActions.FETCH_BLOG_LIST,
      state: "started",
      time: Date.now(),
    });
    yield put<BlogTypes.IFetchBlogsActionSuccess>({
      type: BlogTypes.FETCH_BLOGS_SUCCESS,
      payload: { blogs, filters },
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
