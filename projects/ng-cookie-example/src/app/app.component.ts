import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-cookie-example';
  config = {
    "id": "test",
    "cookieHost": "localhost",
    "cookieName": "ng-cookie-consent",
    "cookieDuration": 200,
    "cookiePath": "/",
    "cookieBannerHeaderText": "Privacy policy",
    "cookieBannerTeaserHtml": "We use cookies to guarantee technical security and to guarantee you the best possible service when using our website, as well as for marketing purposes.",
    "cookieBannerSettingsHeaderText": "Personalize",
    "cookieBannerAcceptButtonText": "allow all cookies",
    "cookieBannerSettingsButtonText": "cookie settings",
    "cookieBannerAcceptSettingsButtonText": "accept configuration",
    "cookieBannerBackButtonText": "back",
    "cookieSettingsArray": [
      {
        "identifier": "mandatory",
        "required": true,
        "label": "tesst",
        "description": "test"
      }
    ]
  };
  configJson = JSON.stringify(this.config);
}
