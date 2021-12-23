import { Component, Input } from '@angular/core';
import { NgCookieConsentConfig } from 'projects/ng-cookie-consent/src/lib/ng-cookie-consent-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() config: NgCookieConsentConfig | undefined;

  title = 'ng-cookie-consent-webcom';
}
