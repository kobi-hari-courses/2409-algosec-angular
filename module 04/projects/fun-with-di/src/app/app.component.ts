import { Component } from '@angular/core';
import { CalcComponent } from "./components/calc/calc.component";
import { GroupComponent } from "./components/group/group.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalcComponent, GroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
