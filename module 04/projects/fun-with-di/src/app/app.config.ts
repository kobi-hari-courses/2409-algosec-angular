import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { AdditionService } from './services/addition.service';
import { WrongAdditionService } from './services/wrong-addition.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    { provide: AdditionService, useClass: WrongAdditionService}
  ]
};
