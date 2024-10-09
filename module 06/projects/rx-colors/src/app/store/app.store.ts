import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { initialAppSlice } from "./app.slice";
import { DataService } from "../services/data.service";
import { inject, signal } from "@angular/core";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { debounce, debounceTime, interval, of, switchMap, tap } from "rxjs";

export const AppStore = signalStore(
    {providedIn: 'root'},
    withState(initialAppSlice), 
    withMethods(store => {
        const data = inject(DataService)
        return {
            search: rxMethod<string>(keywords$ => keywords$.pipe(
                debounceTime(500),
                tap(_ => patchState(store, {busy: true})),
                switchMap(keyword => data.searchColors(keyword)), 
                tap(res => patchState(store, {results: res, busy: false}))
            ))

            // search: (keyword: string) => {
            //     data.searchColors(keyword).subscribe(res => {
            //         patchState(store, {results: res})
            //     })
            // }
        }
    })
)

// const myFunc = rxMethod<number>(t$ => t$);

// myFunc(1);
// myFunc(interval(1000));

// const s = signal(20);
// myFunc(s);
