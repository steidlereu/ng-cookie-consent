import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject, Subject } from 'rxjs';
import { NgCookieConsentConfig } from './ng-cookie-consent-config';

@Injectable({
  providedIn: 'root'
})
export class NgCookieConsentService {

  config: NgCookieConsentConfig | null = null;
  configSub = new BehaviorSubject<any>(null);

  constructor(
    public cookieService: CookieService
    ) { }

  setConfig(config: NgCookieConsentConfig): void {
    this.configSub.next(config);
  }

  getConfigSub(): Subject<NgCookieConsentConfig> {
    return this.configSub;
  }

  getConsent(): any {
    this.readConfig();

    if (this.config == null) {
      return {};
    }

    try {
      return JSON.parse(this.cookieService.get(this.config.cookieName));
    } catch (e) {
      return {};
    }
  }

  hasConsent(): boolean {
    return this.getConsent().length > 0;
  }

  private readConfig() {
    if (this.config == null) {
      this.getConfigSub().subscribe(
        config => {
          this.config = config;
        }
      );
    }
  }

}
