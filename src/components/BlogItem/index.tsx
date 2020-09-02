import * as React from "react";
import { Card } from "antd";

import { IBlog } from "../../interfaces/Blog";
import { TagComponent } from "./Tag";

const { Meta } = Card;

type TProps = {
  blog: IBlog
}

export const BlogItem = ({ blog }: TProps): JSX.Element => (
  <Card
    hoverable
    style={{ width: "33%" }}
    cover={<img alt="blog" src={`${blog.image}?random=${blog._id}`} />}
  >
    {blog.tags.map((tag) => (
      <TagComponent tag={tag} key={tag} />
    ))}
    <Meta title={blog.title} description={blog.content} />
  </Card>
);
