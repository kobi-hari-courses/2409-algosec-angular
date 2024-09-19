import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // state
  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;

  // actions
  setKeyword(keyword: string) {
    this.keyword = keyword;
  }

  search() {
    this.isBusy = true;
    this.results = [];
    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword.toUpperCase(), 
        this.keyword.toLowerCase(), 
        `**${this.keyword}**`
      ]
    },   3000);

  }
}
