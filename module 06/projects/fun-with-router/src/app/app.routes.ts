import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent, children: [
    { path: ':movieId', component: MovieDetailsComponent }
] },
  { path: 'actors', component: ActorsComponent },
];
