import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable({
    providedIn: 'root'
})
export class AdditionService {
    readonly id: number = Math.ceil(Math.random() * 10000000);

    constructor(private history: HistoryService) {
        console.log(`AdditionService ${this.id} created`);
    }

    add(a: number, b: number): number {
        this.history.addRecord(`Addition Service ${this.id}.add ${a} + ${b}`);
        return a + b;
    }   
}