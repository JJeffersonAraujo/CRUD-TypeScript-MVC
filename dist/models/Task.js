"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, done = false) {
        this.id = id;
        this.title = title;
        this.done = done;
    }
}
exports.Task = Task;
