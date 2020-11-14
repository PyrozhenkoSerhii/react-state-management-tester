import * as React from "react";
import { Card, Statistic } from "antd";
import { LikeFilled, DislikeFilled } from "@ant-design/icons";

import { TrackerSources } from "../../../shared/interfaces";
import { IBlog } from "../../interfaces/Blog";
import { TagComponent } from "./Tag";
import { shortenText, renderCallback } from "./utils";
import { TagsWrapper, HeaderWrapper, MetaWrapper, FooterWrapper } from "./styled";

const { Meta } = Card;
const { Profiler } = React;

type TProps = {
  blog: IBlog,
  source: TrackerSources,
}

export const BlogItem = ({ blog, source }: TProps): JSX.Element => (
  <Profiler id="blog" onRender={renderCallback(source)}>
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
      </HeaderWrapper>
      <MetaWrapper>
        <Meta title={blog.title} description={shortenText(blog.content)} />
      </MetaWrapper>
      <FooterWrapper>
        <Statistic
          title="Rating"
          value={blog.rating}
          prefix={blog.rating > 0
            ? <LikeFilled style={{ color: "rgb(122, 216, 91)" }} />
            : <DislikeFilled style={{ color: "rgb(249, 147, 169)" }} />}
        />
        <Statistic
          title="Words"
          value={blog.wordsCount}
        />
      </FooterWrapper>

    </Card>
  </Profiler>
);
