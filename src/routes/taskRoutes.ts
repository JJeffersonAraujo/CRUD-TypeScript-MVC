import { Router } from "express";
import { TaskController } from "../controllers/TaskController";

const router = Router();
const controller = new TaskController();

router.get("/tasks", (req, res) => controller.getAll(req, res));
router.get("/tasks/:id", (req, res) => controller.getOne(req, res));
router.post("/tasks", (req, res) => controller.create(req, res));
router.put("/tasks/:id", (req, res) => controller.update(req, res));
router.delete("/tasks/:id", (req, res) => controller.delete(req, res));

export default router;
