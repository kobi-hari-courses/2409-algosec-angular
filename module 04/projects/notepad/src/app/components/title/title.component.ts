import { Component, ElementRef, Input, input, OnChanges, signal, viewChild } from "@angular/core";

@Component({
    selector: 'app-title', 
    standalone: true,
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent {
    readonly caption = input.required<string>();
    readonly color = input('black');

    readonly headerElement = viewChild.required('abc', {read: ElementRef<any>});

    constructor() {
        setTimeout(() => {
            this.headerElement().nativeElement.style.backgroundColor = 'pink';
        }, 5000);
    }
}