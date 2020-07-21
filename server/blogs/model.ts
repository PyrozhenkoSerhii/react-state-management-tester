import { Schema, model } from "mongoose";

import { blogTags } from "./tags";


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
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
  }],
});


export default model("Blog", BlogSchema);
