import { Schema } from "mongoose";

const FollowersSchema = new Schema({
  followerId: { type: String },
});

export default FollowersSchema;
