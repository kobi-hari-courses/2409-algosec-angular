import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { initialMoviesSlice } from "./movies.slice";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { exhaustMap, tap } from "rxjs";
import { inject } from "@angular/core";
import { DataService } from "../../../services/data.service";

export const MoviesStore = signalStore(
    withState(initialMoviesSlice), 
    withMethods(store => {
        const data = inject(DataService);

        return {
            reload: rxMethod<void>(trigger$ => trigger$.pipe(
                tap(_ => patchState(store, { busy: true })),
                exhaustMap(_ => data.getAllMovies()),
                tap(movies => patchState(store, { movies, busy: false }))
            ))
        }
    }), 
    withHooks(store => ({
        onInit: () => store.reload()
    }))
)