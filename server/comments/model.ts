import {
  Schema, model, Document, Types,
} from "mongoose";
import { IUser } from "../users/model";

export interface IComment {
  content: string;
  author: Types.ObjectId | IUser;
  comments: Array<IComment|string>;
  rating: number;
}

export type TComment = IComment & Document;

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
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
  }],
  rating: {
    type: Number,
    default: 0,
  },
}, {
  versionKey: false,
  timestamps: true,
});


export const CommentModel = model<TComment>("Comment", CommentSchema);
