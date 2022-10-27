import mongoose, { Schema } from "mongoose";
import FollowersSchema from "./followers";
import FollowingSchema from "./following";
import postSchema from "./post";

const UserSchema = new Schema({
  email: { type: String, required: true, max: 40, unique: true },
  username: { type: String, required: true, max: 30 },
  hash: { type: String, required: true, max: 150, select: false },
  followers: [FollowersSchema],
  following: [FollowingSchema],
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
