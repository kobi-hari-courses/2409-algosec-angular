import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { initialMovieDetails } from "./movie-details.slice";
import { computed, inject } from "@angular/core";
import { DataService } from "../../../../services/data.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { switchMap, tap } from "rxjs";
import { BASE_URL_TOKEN } from "../../../../tokens/base-url.token";

export const MovieDetailsStore = signalStore(
    withState(initialMovieDetails), 
    withComputed(store => {
        const baseUrl = inject(BASE_URL_TOKEN);
        return {
            poster: computed(() => store.movie() 
                ? `${baseUrl}/images/movies/${store.movie()!.posterImage}`
                : ''            
            )
        }
    }),
    withMethods(store => {
        const data = inject(DataService);
        return {
            reload: rxMethod<number>(id$ => id$.pipe(
                tap(() => patchState(store, { busy: true })),
                switchMap(id => data.getMovieById(id)),
                tap(movie => patchState(store, { movie, busy: false }))
            ))
        }
    })
)