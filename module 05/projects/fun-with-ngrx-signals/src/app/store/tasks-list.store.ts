import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { initialTasksListSlice } from "./tasks-list.slice";
import { computed } from "@angular/core";
import { addTask } from "./tasks-list.setters";

export const TasksListStore = signalStore(
    {providedIn: 'root'},
    withState(initialTasksListSlice), 
    withComputed((store) => ({
        pendingTasks: computed(() => store.tasks().filter(task => !task.isCompleted).length), 
        completedTasks: computed(() => store.tasks().filter(task => task.isCompleted).length),
    })),
    withMethods(store => ({
        addTask: (title: string) => {
            patchState(store, state => ({tasks: addTask(state.tasks, title)}))
        }, 
        setCaption: (caption: string) => {
            patchState(store, {caption})
        }
    }))
);
