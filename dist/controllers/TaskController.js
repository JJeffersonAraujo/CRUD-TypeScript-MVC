"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const TaskService_1 = require("../services/TaskService");
const TaskView_1 = require("../views/TaskView");
class TaskController {
    constructor() {
        this.service = new TaskService_1.TaskService();
    }
    getAll(req, res) {
        const tasks = this.service.getAll();
        TaskView_1.TaskView.success(res, tasks);
    }
    getOne(req, res) {
        try {
            const id = Number(req.params.id);
            const task = this.service.getOne(id);
            if (!task) {
                return TaskView_1.TaskView.error(res, "Tarefa não encontrada", 404);
            }
            TaskView_1.TaskView.success(res, task);
        }
        catch (err) {
            TaskView_1.TaskView.error(res, err.message, 400);
        }
    }
    create(req, res) {
        try {
            const { title } = req.body;
            const task = this.service.create(title);
            TaskView_1.TaskView.success(res, task, 201);
        }
        catch (err) {
            TaskView_1.TaskView.error(res, err.message, 400);
        }
    }
    update(req, res) {
        try {
            const id = Number(req.params.id);
            const { title, done } = req.body;
            const task = this.service.update(id, title, done);
            TaskView_1.TaskView.success(res, task);
        }
        catch (err) {
            TaskView_1.TaskView.error(res, err.message, 400);
        }
    }
    delete(req, res) {
        try {
            const id = Number(req.params.id);
            const removed = this.service.delete(id);
            if (!removed) {
                return TaskView_1.TaskView.error(res, "Tarefa não encontrada", 404);
            }
            TaskView_1.TaskView.success(res, { message: "Tarefa removida com sucesso" });
        }
        catch (err) {
            TaskView_1.TaskView.error(res, err.message, 400);
        }
    }
}
exports.TaskController = TaskController;
