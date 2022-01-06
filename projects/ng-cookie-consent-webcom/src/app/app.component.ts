import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NgCookieConsentConfig } from 'projects/ng-cookie-consent/src/lib/ng-cookie-consent-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  @Input('data-config')
  config!: string;
  configObj!: NgCookieConsentConfig;
  title = 'ng-cookie-consent-webcom';

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    try {
      this.configObj = JSON.parse(this.config);
    } catch (e) {
      console.error(e);
      console.error('Cannot read config:');
      console.error(this.config);
    }
  }
}
