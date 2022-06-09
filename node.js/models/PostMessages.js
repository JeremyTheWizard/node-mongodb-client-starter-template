import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
});

const postMessage = mongoose.model("PostMessage", postSchema);

export default postMessage;
