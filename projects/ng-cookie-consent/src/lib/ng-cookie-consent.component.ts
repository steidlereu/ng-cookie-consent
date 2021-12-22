import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-cookie-consent',
  template: `
    <p>
      ng-cookie-consent works!
    </p>
    <lib-ng-cookie-consent-dialog></lib-ng-cookie-consent-dialog>
  `,
  styles: [
  ]
})
export class NgCookieConsentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
