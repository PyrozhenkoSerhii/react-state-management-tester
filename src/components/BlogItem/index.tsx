import * as React from "react";
import { Card, Badge } from "antd";

import { IBlog } from "../../interfaces/Blog";
import { TagComponent } from "./Tag";
import { shortenText } from "./utils";
import { TagsWrapper, HeaderWrapper } from "./styled";


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
    <HeaderWrapper>
      <TagsWrapper>
        {blog.tags.map((tag) => (
          <TagComponent tag={tag} key={tag} />
        ))}
      </TagsWrapper>
      <Badge count={blog.rating} style={{ backgroundColor: blog.rating > 0 ? "#6ecc4e" : "52c41a" }} />
    </HeaderWrapper>

    <Meta title={blog.title} description={shortenText(blog.content)} />
  </Card>
);
