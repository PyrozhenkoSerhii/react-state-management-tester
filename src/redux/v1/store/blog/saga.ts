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
      source: TrackerSources.ReduxV1,
      position: TrackerPositions.ReduxSaga,
      action: TrackerActions.FetchBlogList,
      state: "finished",
      timestamp: Date.now(),
    });
    const blogs: Array<IBlog> = yield call(fetchBlogList);

    const filters = generateFilters(blogs);

    TrackerService.setTimeStamps({
      source: TrackerSources.ReduxV1,
      position: TrackerPositions.ReduxReduce,
      action: TrackerActions.FetchBlogList,
      state: "started",
      timestamp: Date.now(),
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
