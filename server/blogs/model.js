import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";

import { blogTags } from "./tags";


const BlogSchema = new Schema({
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

BlogSchema.plugin(timestamps);


module.exports = mongoose.model("Blog", BlogSchema);
