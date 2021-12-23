import { Component, Input, OnInit } from '@angular/core';
import { NgCookieConsentConfig } from './ng-cookie-consent-config';

@Component({
  selector: 'lib-ng-cookie-consent',
  templateUrl: './ng-cookie-consent.component.html',
  styleUrls: ['./ng-cookie-consent.component.css']
})
export class NgCookieConsentComponent implements OnInit {

  @Input() config: NgCookieConsentConfig | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
