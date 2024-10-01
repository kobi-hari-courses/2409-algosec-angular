import { Task } from "../models/task.model";

export function addTask(tasks: Task[], title: string): Task[] {
    return [...tasks, {
        id: tasks.length + 1,
        title,
        isCompleted: false
    }];
}

