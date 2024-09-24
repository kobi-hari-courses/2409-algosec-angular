import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { Person } from './models/person.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly person = signal<Person>({
    name: 'John Doe',
    age: 30, 
    address: {
      city: 'New York',
      street: '5th Avenue',
      zip: '10001'
    }
  });

  readonly numbers = signal([1, 2, 3, 4, 5]);

  changeName(name: string) {
    setTimeout(() => {
      // how do we change the name
      this.person.update(p => ({
        ...p, 
        address: {
          ...p.address, 
          city: 'Washington'
        }
      }));

    }, 500);
  }

  addNewNumber() {
    setTimeout(() => {
      this.numbers.update(n => [-1, ...n, n.length + 1]);
    });
  }

  immutableActionsOnArrays() {
    
  }


  constructor() {
    effect(() => {
      console.log(this.person());
    })
  }

}
