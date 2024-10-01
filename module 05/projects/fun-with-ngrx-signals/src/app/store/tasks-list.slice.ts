import { Task } from "../models/task.model";

export interface TasksListSlice {
    readonly tasks: Task[];
    readonly caption: string;
}


export const initialTasksListSlice: TasksListSlice = {
    tasks: [
        { id: 1, title: 'Buy Milk', isCompleted: true },
        { id: 2, title: 'Pay Bills', isCompleted: false },
        { id: 3, title: 'Read Book', isCompleted: false },
        { id: 4, title: 'Go to Gym', isCompleted: true },
    ], 
    caption: 'Todo Today'
}