import { Component, DestroyRef, effect, inject, Injector, OnDestroy, OnInit, signal } from '@angular/core';
import { repeat } from '../../utils/repeat';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  readonly value = signal(0);

  readonly destroyRef = inject(DestroyRef);
  readonly injector = inject(Injector);

  constructor() {
    repeat(() => {
      this.value.update((v) => v + 1);
      console.log('CounterComponent', this.value());
    }, 1000, /*this.destroyRef*/);

  }
  ngOnInit(): void {
    effect(() => {
      console.log('effect, this value is  ', this.value());
    }, {
      injector: this.injector
    })
  }
}
