import { Schema, model } from "mongoose";


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
});


export default model("User", UserSchema);
