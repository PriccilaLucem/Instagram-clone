import { Schema } from "mongoose";

const FollowingSchema = new Schema({
  followingUserId: { type: String },
});

export default FollowingSchema;
