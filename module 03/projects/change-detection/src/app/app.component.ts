import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  myNumber = signal(20);
  doubleNumber = computed(() => this.myNumber() * 2);

  modifyUsingSet() {
    this.myNumber.set(50);
  }

  increment() {
    this.myNumber.update(value => value + 1);
  }

  doNothing() {}

  constructor() {
    setTimeout(() => {
      console.log('My number changed to 42');
      this.myNumber.set(42);
    }, 3000);

    effect(() => {
      console.log('My number is equal to ', this.myNumber());
    })
  }
}
