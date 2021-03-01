import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  strike: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
