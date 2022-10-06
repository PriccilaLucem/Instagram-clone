import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, max: 40, unique: true },
  username: { type: String, required: true, max: 30 },
  hash: { type: String, required: true, max: 150, select: false },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
