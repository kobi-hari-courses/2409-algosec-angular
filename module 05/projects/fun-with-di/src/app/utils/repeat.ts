import { DestroyRef, inject } from "@angular/core";

export function repeat(
    callback: () => void, 
    period: number, 
    destroyRef: DestroyRef = inject(DestroyRef)
) {
    const intervalId = setInterval(callback, period);
    destroyRef.onDestroy(() => {
        clearInterval(intervalId);
    });    
}
