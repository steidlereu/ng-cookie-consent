import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NgCookieConsentConfig } from './ng-cookie-consent-config';

@Injectable({
  providedIn: 'root'
})
export class NgCookieConsentService {

  configSub = new BehaviorSubject<any>(null);

  constructor() { }

  setConfig(config: NgCookieConsentConfig): void {
    this.configSub.next(config);
  }

  getConfigSub(): Subject<NgCookieConsentConfig> {
    return this.configSub;
  }
 
}
