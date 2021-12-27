import { Component, Input, OnInit } from '@angular/core';
import { NgCookieConsentConfig } from './ng-cookie-consent-config';
import { NgCookieConsentService } from './ng-cookie-consent.service';

@Component({
  selector: 'lib-ng-cookie-consent',
  templateUrl: './ng-cookie-consent.component.html',
  styleUrls: ['./ng-cookie-consent.component.css']
})
export class NgCookieConsentComponent implements OnInit {

  @Input()
  config!: NgCookieConsentConfig;

  constructor(public ngCookieConsentService: NgCookieConsentService) { }

  ngOnInit(): void {
    this.ngCookieConsentService.setConfig(this.config);
  }

}
