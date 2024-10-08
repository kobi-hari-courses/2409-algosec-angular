import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksListStore } from './store/tasks-list.store';
import { UseStoreComponent } from "./components/use-store/use-store.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UseStoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
})
export class AppComponent {
  readonly store = inject(TasksListStore);
}
