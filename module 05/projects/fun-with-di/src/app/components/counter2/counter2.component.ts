import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-counter2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter2.component.html',
  styleUrl: './counter2.component.scss'
})
export class Counter2Component {
  readonly value$ = interval(1000).pipe(
    tap(val => console.log('The value is ', val)), 
    takeUntilDestroyed()
  );

  ngOnInit() {
    const value2$ = interval(1000).pipe(
      tap(val => console.log('The value is ', val)), 
      takeUntilDestroyed()
    );
  
  }

}
