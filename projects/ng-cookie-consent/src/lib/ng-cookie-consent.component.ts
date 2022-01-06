import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NgCookieConsentConfig } from './ng-cookie-consent-config';
import { NgCookieConsentService } from './ng-cookie-consent.service';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'lib-ng-cookie-consent',
  templateUrl: './ng-cookie-consent.component.html',
  styleUrls: ['./ng-cookie-consent.component.css']
})
export class NgCookieConsentComponent implements OnInit, OnChanges {

  id = 'ng-cookie-consent';
  _config = new BehaviorSubject<NgCookieConsentConfig | null>(null);

  @Input() set config(config: NgCookieConsentConfig) {
    this._config.next(config);
  }

  get config() {
    // @ts-ignore
    return this._config.getValue();
  }

  constructor(public ngCookieConsentService: NgCookieConsentService) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this._config.subscribe(config => {
      if (config !== null && config !== undefined) {
        this.ngCookieConsentService.setConfig(config);
        this.id = this.id + '-' + this.config.id;
      }
    });
  }

}
