import { Component, signal } from '@angular/core';
import { TitleComponent } from './components/title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly colors = signal(['red', 'green', 'blue', 'purple', 'orange', 'pink', 'brown', 'black'])
                    .asReadonly();
  readonly sizes = signal(['14px', '18px', '24px', '36px', '60px'])
                    .asReadonly();
  readonly fonts = signal(['Arial', 'Verdana', 'Tahoma', 'Times New Roman', 'Georgia', 'Comic Sans MS', 'Trebuchet MS', 'Impact'])
                    .asReadonly();

  readonly selectedColor = signal(this.colors()[0]);
  readonly selectedSize = signal(this.sizes()[0]);
  readonly selectedFont = signal(this.fonts()[0]);

  changeColor(color: string) {
    this.selectedColor.set(color);
  }

  changeSize(size: string) {
    this.selectedSize.set(size);
  }

  changeFont(font: string) {
    this.selectedFont.set(font);
  }
}
