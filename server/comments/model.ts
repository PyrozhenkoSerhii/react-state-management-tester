import { Schema, model } from "mongoose";


const CommentSchema = new Schema({
  content: {
    type: String,
    trim: true,
    required: [true, "Comment's content is required"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Comment's author is required"],
  },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
  }],
  rating: {
    type: Number,
    default: 0,
  },
});


export default model("Commment", CommentSchema);
