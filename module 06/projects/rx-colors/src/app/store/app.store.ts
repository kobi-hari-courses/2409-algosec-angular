import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { initialAppSlice } from "./app.slice";
import { DataService } from "../services/data.service";
import { inject } from "@angular/core";

export const AppStore = signalStore(
    {providedIn: 'root'},
    withState(initialAppSlice), 
    withMethods(store => {
        const data = inject(DataService)
        return {
            search: (keyword: string) => {
                data.searchColors(keyword).subscribe(res => {
                    patchState(store, {results: res})
                })
            }
        }
    })
)