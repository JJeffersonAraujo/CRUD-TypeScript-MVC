"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const Task_1 = require("../models/Task");
class TaskService {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    getAll() {
        return this.tasks;
    }
    getOne(id) {
        if (Number.isNaN(id))
            throw new Error("ID inválido");
        return this.tasks.find((t) => t.id === id) || null;
    }
    create(title) {
        if (!title || typeof title !== 'string')
            throw new Error("Título inválido");
        const task = new Task_1.Task(this.nextId++, title);
        this.tasks.push(task);
        return task;
    }
    update(id, title, done) {
        if (Number.isNaN(id))
            throw new Error("ID inválido");
        const task = this.tasks.find((t) => t.id === id); // corrigido
        if (!task)
            throw new Error("Tarefa não encontrada");
        if (title !== undefined)
            task.title = title;
        if (done !== undefined)
            task.done = done;
        return task;
    }
    delete(id) {
        if (Number.isNaN(id))
            throw new Error("ID inválido");
        const before = this.tasks.length; // corrigido
        this.tasks = this.tasks.filter((t) => t.id !== id);
        return this.tasks.length < before;
    }
}
exports.TaskService = TaskService;
