import * as React from "react";
import { Spin, Alert } from "antd";
import { observer } from "mobx-react";

import { blogListState } from "../../../store/list";

import { BlogItem } from "../../../../../components/BlogItem";
import { TrackerService } from "../../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../../shared/interfaces";

import { BlogListContent } from "../../../../../components/styled";

let fetched = false;

const { useContext } = React;

export const ListComponent = observer((): JSX.Element => {
  const { loading, error, blogs } = useContext(blogListState);

  if (blogs.length) {
    if (!fetched) {
      fetched = true;
      TrackerService.setTimeStamps({
        source: TrackerSources.MOBX_V2,
        position: TrackerPositions.MOBX_ACTION_COMMIT,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "finished",
        time: Date.now(),
      });
    }
    TrackerService.setTimeStamps({
      source: TrackerSources.MOBX_V2,
      position: TrackerPositions.MOBX_ACTION_COMMIT,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "finished",
      time: Date.now(),
      affectedItems: blogs.length,
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
        <BlogItem key={blog._id} blog={blog} source={TrackerSources.MOBX_V2} />
      ))}
    </BlogListContent>
  );
});
