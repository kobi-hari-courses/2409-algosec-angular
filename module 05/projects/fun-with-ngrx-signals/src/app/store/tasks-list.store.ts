import { patchState, signalStore, type, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { initialTasksListSlice } from "./tasks-list.slice";
import { computed, DestroyRef, effect, inject } from "@angular/core";
import { addTask } from "./tasks-list.setters";
import { addEntities, addEntity, withEntities } from "@ngrx/signals/entities";
import { Task } from "../models/task.model";
import { readableStreamLikeToAsyncGenerator } from "rxjs/internal/util/isReadableStreamLike";

export const TasksListStore = signalStore(
    {providedIn: 'root'},
    withState(initialTasksListSlice), 
    withEntities({entity: type<Task>(), collection: 'task'}),
    withComputed((store) => {
        console.log('Hi there, we are inside the scope of with computed');
        const destroyRef = inject(DestroyRef);
        return {
            pendingTasks: computed(() => store.taskEntities().filter(task => !task.isCompleted).length), 
            completedTasks: computed(() => store.taskEntities().filter(task => task.isCompleted).length),    
        }
    }),
    withMethods(store => ({
        addTask: (title: string) => {
            const task: Task = {id: Math.random() * 1000, title, isCompleted: false};
            patchState(store, addEntity(task, {collection: 'task'}))
        }, 
        setCaption: (caption: string) => {
            patchState(store, {caption})
        }
    })), 
    withHooks(store => ({
        onInit: () => {
            const tasksJson = localStorage.getItem('tasks');
            if (tasksJson) {
                const tasks = JSON.parse(tasksJson) as Task[];
                patchState(store, addEntities(tasks, {collection: 'task'}));
            }

            effect(() => {
                const tasks = store.taskEntities();
                localStorage.setItem('tasks', JSON.stringify(tasks));
            })
        }
    }))
);


function generateNumber(seed: number) {
    return seed * 2;
}

const x = generateNumber(Math.random());
