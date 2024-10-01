import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { Counter2Component } from './components/counter2/counter2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, Counter2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly showCounter = signal(true);

  toggleCounter() {
    this.showCounter.update(v => !v);
  }
}
