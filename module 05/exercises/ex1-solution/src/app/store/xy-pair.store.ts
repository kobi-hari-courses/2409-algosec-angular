import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { initialXyPairSlice } from "./xy-pair.slice";
import { computed } from "@angular/core";

export const XyPairStore = signalStore(
    { providedIn: 'root'}, 
    withState(initialXyPairSlice), 
    withComputed(store => ({
        sum: computed(() => store.x() + store.y())
    })), 
    withMethods(store => ({
        updateX: (x: number) => patchState(store , {x}),
        updateY: (y: number) => patchState(store , {y})
    }))
);