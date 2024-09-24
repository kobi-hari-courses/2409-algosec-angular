import { effect, Inject, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    readonly records = signal<string[]>([]);

    addRecord(record: string) {
        this.records.update(records => [...records, record]);
    }

    constructor() {
        effect(() => {
          console.log('History service records: ', this.records());  
        })
    }
}