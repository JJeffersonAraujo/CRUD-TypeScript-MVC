import { Response } from "express";

export class TaskView {
  static success(res: Response, data: any, status: number = 200): void {
    res.status(status).json({ success: true, data });
  }

  static error(res: Response, message: string, status: number = 400): void {
    res.status(status).json({ success: false, error: message });
  }
}
