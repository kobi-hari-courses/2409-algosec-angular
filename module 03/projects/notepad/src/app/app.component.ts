import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly colors = ['red', 'green', 'blue', 'purple', 'orange', 'pink', 'brown', 'black'];
  readonly sizes = ['14px', '18px', '24px', '36px', '60px'];
  readonly fonts = ['Arial', 'Verdana', 'Tahoma', 'Times New Roman', 'Georgia', 'Comic Sans MS', 'Trebuchet MS', 'Impact'];

  selectedColor = this.colors[0];
  selectedSize = this.sizes[0];
  selectedFont = this.fonts[0];

  changeColor(color: string) {
    this.selectedColor = color;
  }

  changeSize(size: string) {
    this.selectedSize = size;
  }

  changeFont(font: string) {
    this.selectedFont = font;
  }
}
