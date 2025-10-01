import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";
import { TaskView } from "../views/TaskView";

export class TaskController {
  private service = new TaskService();

  getAll(req: Request, res: Response): void {
    const tasks = this.service.getAll();
    TaskView.success(res, tasks);
  }

  getOne(req: Request, res: Response): void {
    try {
      const id = Number(req.params.id);
      const task = this.service.getOne(id);

      if (!task) {
        return TaskView.error(res, "Tarefa não encontrada", 404);
      }

      TaskView.success(res, task);
    } catch (err: any) {
      TaskView.error(res, err.message, 400);
    }
  }

  create(req: Request, res: Response): void {
    try {
      const { title } = req.body;
      const task = this.service.create(title);
      TaskView.success(res, task, 201);
    } catch (err: any) {
      TaskView.error(res, err.message, 400);
    }
  }

  update(req: Request, res: Response): void {
    try {
      const id = Number(req.params.id);
      const { title, done } = req.body;
      const task = this.service.update(id, title, done);
      TaskView.success(res, task);
    } catch (err: any) {
      TaskView.error(res, err.message, 400);
    }
  }

  delete(req: Request, res: Response): void {
    try {
      const id = Number(req.params.id);
      const removed = this.service.delete(id);

      if (!removed) {
        return TaskView.error(res, "Tarefa não encontrada", 404);
      }

      TaskView.success(res, { message: "Tarefa removida com sucesso" });
    } catch (err: any) {
      TaskView.error(res, err.message, 400);
    }
  }
}
