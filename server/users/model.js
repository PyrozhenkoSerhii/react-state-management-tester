import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";


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

UserSchema.plugin(timestamps);


module.exports = mongoose.model("User", UserSchema);
