import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN } from '../tokens/base-url.token';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly http = inject(HttpClient);
  readonly baseUrl = inject(BASE_URL_TOKEN);

  constructor() { }

  getAllMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movies`;
    return this.http.get<Movie[]>(url);    
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.baseUrl}/movies/${id}`;
    return this.http.get<Movie>(url);
  }
}
