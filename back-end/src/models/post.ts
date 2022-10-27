import mongoose, { Schema } from "mongoose";
import { PostInterface } from "../types";

const postSchema = new Schema<PostInterface>({
  authorId: { type: String },
  description: { type: String, max: 300 },
  publication_date: { type: Date, default: new Date() },
  data: Buffer,
  contentType: String,
});

const PostsModel = mongoose.model("posts", postSchema);
export default PostsModel;
