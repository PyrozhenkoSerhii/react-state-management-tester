import * as React from "react";
import { Spin, Alert } from "antd";

import { useSelector } from "react-redux";
import { IApplicationState } from "../../../store/types";

import { BlogItem } from "../../../../../components/BlogItem";
import { TrackerService } from "../../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../../shared/interfaces";

import { BlogListContent } from "../../../../../components/styled";

let fetched = false;

export const ListComponent = (): JSX.Element => {
  const { blogs, error, loading } = useSelector((state: IApplicationState) => state.blogs);

  if (blogs.length) {
    if (!fetched) {
      fetched = true;
      TrackerService.setTimeStamps({
        source: TrackerSources.REDUX_V1,
        position: TrackerPositions.REDUX_COMMIT,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "finished",
        time: Date.now(),
      });
    }

    TrackerService.setTimeStamps({
      source: TrackerSources.REDUX_V1,
      position: TrackerPositions.REDUX_COMMIT,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "finished",
      time: Date.now(),
    });
  }

  if (loading) return <Spin />;

  if (error) {
    return (
      <Alert message={error} type="error" closable />
    );
  }

  return (
    <BlogListContent>
      {blogs && blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} source={TrackerSources.REDUX_V1} />
      ))}
    </BlogListContent>
  );
};
