import { Component, Input, OnInit } from '@angular/core';
import { NgCookieConsentConfig } from 'projects/ng-cookie-consent/src/lib/ng-cookie-consent-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  @Input()
  config!: string;

  configObj!: NgCookieConsentConfig;

  title = 'ng-cookie-consent-webcom';

  ngOnInit(): void {
    this.configObj = JSON.parse(this.config);
  }
}
