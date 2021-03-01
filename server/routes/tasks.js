import express from "express";
import middleware from "../middleware/middleware.js";
import { getTasks, createTask, strike, delTask } from "../controllers/tasks.js";

const router = express.Router();
router.get("/fetch", middleware, getTasks);
router.post("/create", middleware, createTask);
router.patch("/strike", middleware, strike);
router.delete("/delete", middleware, delTask);
export default router;
