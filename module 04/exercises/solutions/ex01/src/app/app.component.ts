import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly data = signal([2, 5, 7]);

  changeValue(index: number, newValue: number) {
    this.data.update(ar => ar.map((v, i) => i === index ? newValue : v));
  }
}
