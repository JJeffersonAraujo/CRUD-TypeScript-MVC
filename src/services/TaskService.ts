import { Task } from '../models/Task';

export class TaskService {
    private tasks: Task[] = [];
    private nextId: number = 1; 

    getAll(): Task[] {
        return this.tasks;
    }

    getOne(id: number): Task | null {
        if (Number.isNaN(id)) throw new Error("ID inválido");
        return this.tasks.find((t) => t.id === id) || null;
    }

    create(title: string): Task {
        if (!title || typeof title !== 'string') throw new Error("Título inválido");
        const task = new Task(this.nextId++, title);
        this.tasks.push(task);
        return task;
    }

    update(id: number, title?: string, done?: boolean): Task {
        if (Number.isNaN(id)) throw new Error("ID inválido");
        const task = this.tasks.find((t) => t.id === id); // corrigido
        if (!task) throw new Error("Tarefa não encontrada");

        if (title !== undefined) task.title = title;
        if (done !== undefined) task.done = done;
        
        return task;
    }
    
    delete(id: number): boolean {
        if (Number.isNaN(id)) throw new Error("ID inválido");
        const before = this.tasks.length; // corrigido
        this.tasks = this.tasks.filter((t) => t.id !== id);
        return this.tasks.length < before;
    }
}
