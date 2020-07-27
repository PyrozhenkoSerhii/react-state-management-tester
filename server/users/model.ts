import { Schema, model, Document } from "mongoose";


export interface IUser {
  username: string;
  email: string;
  image: string;
}

export type TUser = IUser & Document

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "User's username is required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "User's email is required"],
  },
  image: {
    type: String,
    trim: true,
    required: [true, "User's profile image is required"],
  },
}, {
  versionKey: false,
  timestamps: true,
});


export const UserModel = model<TUser>("User", UserSchema);
