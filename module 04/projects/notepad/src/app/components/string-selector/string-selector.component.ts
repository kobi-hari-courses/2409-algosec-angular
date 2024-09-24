import { Component, EventEmitter, input, model, Output, output, signal } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  standalone: true,
  imports: [],
  templateUrl: './string-selector.component.html',
  styleUrl: './string-selector.component.css'
})
export class StringSelectorComponent {
  readonly options = input.required<string[]>();
  readonly selectedOption = model.required<string>();

  // readonly selection = output<string>()

  onSelect(option: string) {
    this.selectedOption.set(option);
    // this.selection.emit(option);
  }

}
