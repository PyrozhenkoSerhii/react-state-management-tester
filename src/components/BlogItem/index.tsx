import * as React from "react";
import { Card } from "antd";

import { IBlog } from "../../interfaces/Blog";

const { Meta } = Card;

type TProps = {
  blog: IBlog
}

export const BlogItem = ({ blog }: TProps): JSX.Element => (
  <Card
    hoverable
    style={{ width: "33%" }}
    cover={<img alt="blog" src={blog.image} />}
  >
    <Meta title={blog.title} description={blog.content} />
  </Card>
);
