import { NgModule } from '@angular/core';
import { NgCookieConsentComponent } from './ng-cookie-consent.component';
import { NgCookieConsentDialogComponent } from './ng-cookie-consent-dialog/ng-cookie-consent-dialog.component';
import { DialogContentComponent } from './ng-cookie-consent-dialog/dialog-content/dialog-content.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    NgCookieConsentComponent,
    NgCookieConsentDialogComponent,
    DialogContentComponent
  ],
  imports: [
    MatDialogModule
  ],
  exports: [
    NgCookieConsentComponent
  ]
})
export class NgCookieConsentModule { }
