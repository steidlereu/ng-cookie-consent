import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgCookieConsentConfig } from './ng-cookie-consent-config';

@Injectable({
  providedIn: 'root'
})
export class NgCookieConsentService {

  configSub = new Subject();

  constructor() { }

  setConfig(config: NgCookieConsentConfig): void {
    this.configSub.next(config);
  }

  getConfigSub(): Subject<any> {
    return this.configSub;
  }
 
}
