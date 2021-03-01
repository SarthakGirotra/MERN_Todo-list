import tasks from "../models/task.js";

export const getTasks = async (req, res) => {
  if (!req?.userId) return res.status(400).send({ message: "Unauthorized" });
  try {
    const fetchedTasks = await tasks.find({ userID: req.userId });

    res.status(200).json(fetchedTasks);
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (req, res) => {
  const task = req.body;
  const newTask = new tasks({ ...task, userID: req.userId });
  try {
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    console.log(error);
  }
};

export const strike = async (req, res) => {
  const Stask = req.body;
  Stask.strike = true;

  const strikedTask = await tasks.findByIdAndUpdate(
    Stask._id,
    { ...Stask },
    { new: true, useFindAndModify: false }
  );
  res.json(strikedTask);
};

export const delTask = async (req, res) => {
  const task = req.body;

  try {
    await tasks.findByIdAndRemove(task._id, { useFindAndModify: false });
  } catch (error) {
    console.log(error);
  }

  res.json("deleted successfully");
};
