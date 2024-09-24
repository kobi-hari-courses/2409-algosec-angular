import {
  Component,
  inject,
  InjectionToken,
  Injector,
  OnInit,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { AdditionService } from '../../services/addition.service';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss',
  providers: [],
})
export class CalcComponent {
  readonly injector = inject(Injector);

  readonly additionService = inject(AdditionService);

  readonly result = signal(0);

  add(a: number, b: number) {
    runInInjectionContext(this.injector, () => {
      const res = this.additionService.add(a, b);
      this.result.set(res);
    });
  }
}
