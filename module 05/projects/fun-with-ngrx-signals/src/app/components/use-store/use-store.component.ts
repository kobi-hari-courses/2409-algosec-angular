import { Component, inject } from '@angular/core';
import { TasksListStore } from '../../store/tasks-list.store';

@Component({
  selector: 'app-use-store',
  standalone: true,
  imports: [],
  templateUrl: './use-store.component.html',
  styleUrl: './use-store.component.scss', 
  providers: [TasksListStore]
})
export class UseStoreComponent {
  readonly store = inject(TasksListStore)

}
