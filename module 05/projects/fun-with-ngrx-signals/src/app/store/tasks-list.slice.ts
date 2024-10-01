import { Task } from '../models/task.model';

export interface TasksListSlice {
  readonly caption: string;
}

export const initialTasksListSlice: TasksListSlice = { caption: 'Todo Today' };
