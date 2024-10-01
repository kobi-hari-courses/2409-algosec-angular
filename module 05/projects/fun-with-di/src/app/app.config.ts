import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { ADDRESS_TOKEN } from './tokens/address.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    {provide: ADDRESS_TOKEN, useValue: 'https://example.com'}
  ]
};
