"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskView = void 0;
class TaskView {
    static success(res, data, status = 200) {
        res.status(status).json({ success: true, data });
    }
    static error(res, message, status = 400) {
        res.status(status).json({ success: false, error: message });
    }
}
exports.TaskView = TaskView;
