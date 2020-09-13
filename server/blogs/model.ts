import { Schema, model, Document, Types } from "mongoose";

import { blogTags } from "./tags";
import { TUser } from "../users/model";
import { TComment } from "../comments/model";

export interface IBlog {
  title: string;
  content: string;
  wordsCount: number;
  image: string;
  author: TUser | Types.ObjectId;
  rating: number;
  tags: Array<string>;
  comments: Array<TComment | Types.ObjectId>;
}

export type TBlog = IBlog & Document;

const BlogSchema: Schema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Blog's title is required"],
  },
  content: {
    type: String,
    trim: true,
    required: [true, "Blog's content is required"],
  },
  wordsCount: {
    type: Number,
    required: [true, "Blog's words count is required"],
  },
  image: {
    type: String,
    required: [true, "Blog's image is required"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Blog's author is required"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  tags: [{
    type: String,
    enum: blogTags,
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
  }],
});

export const BlogModel = model<TBlog>("Blog", BlogSchema);
