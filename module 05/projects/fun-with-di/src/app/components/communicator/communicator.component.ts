import { Component, inject, Inject } from '@angular/core';
import { ADDRESS_TOKEN } from '../../tokens/address.token';

@Component({
  selector: 'app-communicator',
  standalone: true,
  imports: [],
  templateUrl: './communicator.component.html',
  styleUrl: './communicator.component.scss'
})
export class CommunicatorComponent {
  readonly address = inject(ADDRESS_TOKEN);

}
