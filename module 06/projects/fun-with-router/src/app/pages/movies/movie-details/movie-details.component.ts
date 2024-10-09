import { Component, effect, inject, input } from '@angular/core';
import { MovieDetailsStore } from './store/movie-details.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss', 
  providers: [MovieDetailsStore]

})
export default class MovieDetailsComponent {
  readonly movieId = input.required<number>();

  readonly store = inject(MovieDetailsStore);

  constructor() {
    this.store.reload(this.movieId);
  }
}
