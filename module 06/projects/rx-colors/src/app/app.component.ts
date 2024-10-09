import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, map, Observable, Observer } from 'rxjs';
import { DataService } from './services/data.service';
import { AppStore } from './store/app.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly store = inject(AppStore);





  // readonly dataService = inject(DataService);

  // createObserver<T>(id: string): Observer<T> {
  //   return {
  //     next: (value: T) => console.log(`${id} next ${value}`),
  //     error: (err: any) => console.error(`${id} error ${err}`),
  //     complete: () => console.log(`${id} complete`),
  //   }
  // }

  // subscribeToConsole<T>(observable: Observable<T>, id: string) {
  //   const observer = this.createObserver<T>(id);
  //   observable.subscribe(observer);
  // }  

  // go() {
  //   this.dataService.searchColors('bl').subscribe(res => {
  //     console.log('res', res);
  //   })


  //   // const interval$ = interval(1000);
  //   // this.subscribeToConsole(interval$, 'interval');

  //   // const mapped$ = interval$.pipe(
  //   //   map(i => i * 2)
  //   // );
  //   // this.subscribeToConsole(mapped$, 'mapped1');

  //   // setTimeout(() => {
  //   //   this.subscribeToConsole(mapped$, 'mapped2');
  //   // }, 3500);
  // }

}
