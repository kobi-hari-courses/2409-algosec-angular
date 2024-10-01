import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, interval, Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  createObserver(id: string): Observer<number> {
    return {
      next: (value: number) => {
        console.log(`Observer ${id} next value: ${value}`);
      },
      error: (error: any) => {
        console.log(`Observer ${id} error: ${error}`);
      },
      complete: () => {
        console.log(`Observer ${id} complete`);
      },
    };
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable( observer => {
      observer.next(42);
      setTimeout(() => { observer.next(100) }, 1000);
      setTimeout(() => { observer.next(200) }, 2000);
      setTimeout(() => { observer.next(300) }, 3000);
      setTimeout(() => { observer.next(800) }, 5000);
      setTimeout(() => { observer.complete() }, 10000);
      // setTimeout(() => { observer.next(1000) }, 11000);
    });
  }

  createCustomSubject(): Observable<number> {
    const subject = new Subject<number>();
    subject.next(42);
    setTimeout(() => { subject.next(100) }, 1000);
    setTimeout(() => { subject.next(200) }, 2000);
    setTimeout(() => { subject.next(300) }, 3000);
    setTimeout(() => { subject.next(800) }, 5000);
    setTimeout(() => { subject.complete() }, 10000);

    return subject;
  }


  createCustomBehaviorSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(42);
    setTimeout(() => { subject.next(100) }, 1000);
    setTimeout(() => { subject.next(200) }, 2000);
    setTimeout(() => { subject.next(300) }, 3000);
    setTimeout(() => { subject.next(800) }, 5000);
    setTimeout(() => { subject.complete() }, 10000);

    return subject;
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');
    const observerC = this.createObserver('C');

    const observable = this.createCustomBehaviorSubject();

    console.log('Subscribing observer A');
    observable.subscribe(observerA);

    setTimeout(() => {
      console.log('Subscribing observer B');
      observable.subscribe(observerB);
    }, 2500);

    setTimeout(() => {
      console.log('Subscribing observer C');
      observable.subscribe(observerC);
    }, 11000);

  }
}
