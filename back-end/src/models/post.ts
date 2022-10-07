import { Schema } from "mongoose";

const postSchema = new Schema({
  description: { type: String, max: 300 },
  publication_date: { type: Date, default: new Date() },
  data: Buffer,
  contentType: String,
});

export default postSchema;
