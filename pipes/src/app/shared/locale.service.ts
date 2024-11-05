import { Injectable, InjectionToken, ApplicationRef } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';

export const DYNAMIC_LOCALE_ID = new InjectionToken<string>(
  'DYNAMIC_LOCALE_ID'
);

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocale = 'pt-BR';

  constructor(private appRef: ApplicationRef) {
    this.setLocale(this.currentLocale);
  }

  get locale(): string {
    return this.currentLocale;
  }

  public setLocale(locale: string): void {
    this.currentLocale = locale;

    switch (this.currentLocale) {
      case 'pt-BR':
        this.setLocaleData(localePt, 'pt-BR');
        break;
      case 'en-US':
        this.setLocaleData(localeEn, 'en-US');
        break;
      default:
        this.setLocaleData(localePt, 'pt-BR');
        break;
    }

    this.appRef.tick();
  }

  private setLocaleData(localeData: any, localeID: string) {
    registerLocaleData(localeData, localeID);
  }
}
