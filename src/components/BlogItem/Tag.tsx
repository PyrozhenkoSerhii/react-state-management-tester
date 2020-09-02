import * as React from "react";
import { Tag } from "antd";
import { BlogTagsEnum } from "../../../server/blogs/tags";

interface IProps {
  tag: string;
}

export const TagComponent = ({ tag }: IProps): JSX.Element => {
  switch (tag) {
    case BlogTagsEnum.health:
      return <Tag color="cyan">{tag}</Tag>;
    case BlogTagsEnum.nature:
      return <Tag color="green">{tag}</Tag>;
    case BlogTagsEnum.politics:
      return <Tag color="volcano">{tag}</Tag>;
    case BlogTagsEnum.tech:
      return <Tag color="purple">{tag}</Tag>;
    default:
      return <Tag>{tag}</Tag>;
  }
};
