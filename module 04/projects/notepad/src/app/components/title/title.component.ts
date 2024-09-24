import { Component, Input, input, OnChanges, signal } from "@angular/core";

@Component({
    selector: 'app-title', 
    standalone: true,
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent {
    readonly caption = input.required<string>();
    readonly color = input('black');


}