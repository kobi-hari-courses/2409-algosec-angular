import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly value = input.required<number>();  

  readonly changeValue = output<number>();

  increment() {
    this.changeValue.emit(this.value() + 1);
  }

  decrement() {
    this.changeValue.emit(this.value() - 1);
  }



}
