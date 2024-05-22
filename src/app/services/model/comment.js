import mongoose from "mongoose";
const commentModel = new mongoose.Schema({
  name: String,
  email: String,
  comment: String,
  loaction: String,
});
export const Comment =
  mongoose.models.comments || mongoose.model("comments", commentModel);
