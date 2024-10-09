import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  { path: 'movies', loadComponent: () => import('./pages/movies/movies.component'), children: [
    { path: ':movieId', loadComponent: () => import('./pages/movies/movie-details/movie-details.component') }
] },
  { path: 'actors', loadComponent: () => import('./pages/actors/actors.component') },
];
