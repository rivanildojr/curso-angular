import {
  ApplicationConfig,
  provideZoneChangeDetection,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter, } from '@angular/router';

import { routes } from './app.routes';

import { DYNAMIC_LOCALE_ID, LocaleService } from './shared/locale.service';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useExisting: DYNAMIC_LOCALE_ID },
    { provide: DYNAMIC_LOCALE_ID, useFactory: (localeService: LocaleService) => localeService.locale, deps: [LocaleService] },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
