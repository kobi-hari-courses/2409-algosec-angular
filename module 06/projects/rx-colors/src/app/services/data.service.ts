import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly  http = inject(HttpClient)

  constructor() { }

  searchColors(keyword: string): Observable<Color[]> {
    const url = `http://localhost:3000/colors?name_like=${keyword}`;
    const res$ = this.http.get<Color[]>(url);
    return res$;    
  }
}
