import bcrypt from "bcryptjs";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ username, password: hashedPassword });
    const token = jwt.sign(
      { username: result.username, id: result._id },
      "test",
      { expiresIn: "7d" }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

export const signin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser)
      return res.status(404).json({ message: "username not found" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "incorrect credentials" });
    const token = jwt.sign(
      { username: existingUser, id: existingUser._id },
      "test",
      { expiresIn: "7d" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
