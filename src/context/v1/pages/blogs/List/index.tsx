import * as React from "react";
import { Spin } from "antd";

import { BlogsContext } from "../../../context/blogs/store";

import { BlogItem } from "../../../../../components/BlogItem";
import { TrackerService } from "../../../../../services/tracker";
import { TrackerActions, TrackerSources, TrackerPositions } from "../../../../../../shared/interfaces";

import { BlogListContent } from "../../../../../components/styled";

let fetched = false;

const { useContext } = React;

export const ListComponent = (): JSX.Element => {
  const { blogs } = useContext(BlogsContext);

  if (blogs.length) {
    if (!fetched) {
      fetched = true;
      TrackerService.setTimeStamps({
        source: TrackerSources.CONTEXT_V1,
        position: TrackerPositions.CONTEXT_COMMIT,
        action: TrackerActions.FETCH_BLOG_LIST,
        state: "finished",
        time: Date.now(),
      });
    }
    TrackerService.setTimeStamps({
      source: TrackerSources.CONTEXT_V1,
      position: TrackerPositions.CONTEXT_COMMIT,
      action: TrackerActions.CHECKBOX_FILTER,
      state: "finished",
      time: Date.now(),
      affectedItems: blogs.length,
    });
  }

  if (!blogs.length) return <Spin />;

  return (
    <BlogListContent>
      {blogs && blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} source={TrackerSources.CONTEXT_V1} />
      ))}
    </BlogListContent>
  );
};
