import { Schema } from "mongoose";

const postSchema = new Schema({
  description: { type: String, max: 300 },
  image: { type: Buffer, contentType: String },
  publication_date: { type: Date, default: new Date() },
});

export default postSchema;
