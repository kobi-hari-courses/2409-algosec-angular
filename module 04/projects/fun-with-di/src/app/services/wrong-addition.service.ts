import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable({
    providedIn: 'root'
})
export class WrongAdditionService {
    readonly id: number = Math.ceil(Math.random() * 10000000);

    constructor(private history: HistoryService) {
        console.log(`WronfAdditionService ${this.id} created`);
    }

    add(a: number, b: number): number {
        this.history.addRecord(`Wrong Addition Service ${this.id}.add ${a} + ${b}`);
        return a + b + 1;
    }   
}