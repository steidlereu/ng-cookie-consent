import { NgModule } from '@angular/core';
import { NgCookieConsentComponent } from './ng-cookie-consent.component';
import { NgCookieConsentDialogComponent } from './ng-cookie-consent-dialog/ng-cookie-consent-dialog.component';
import { DialogContentComponent } from './ng-cookie-consent-dialog/dialog-content/dialog-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CookieModule } from 'ngx-cookie';



@NgModule({
  declarations: [
    NgCookieConsentComponent,
    NgCookieConsentDialogComponent,
    DialogContentComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    CookieModule.forRoot()
  ],
  exports: [
    NgCookieConsentComponent
  ]
})
export class NgCookieConsentModule { }
