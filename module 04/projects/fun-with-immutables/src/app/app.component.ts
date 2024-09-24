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
    age: 30
  });

  changeName(name: string) {
    // how do we change the name
  }

  constructor() {
    effect(() => {
      console.log(this.person());
    })
  }

}
