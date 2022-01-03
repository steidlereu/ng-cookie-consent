import { Component, Input, OnInit } from '@angular/core';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import {MatDialog} from '@angular/material/dialog';
import { NgCookieConsentConfig } from '../ng-cookie-consent-config';
import { NgCookieConsentService } from '../ng-cookie-consent.service';

@Component({
  selector: 'lib-ng-cookie-consent-dialog',
  templateUrl: './ng-cookie-consent-dialog.component.html',
  styleUrls: ['./ng-cookie-consent-dialog.component.css']
})
export class NgCookieConsentDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public ngCookieConsentService: NgCookieConsentService
    ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {restoreFocus: true, disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    if (this.ngCookieConsentService.hasConsent() == false) {
      this.openDialog();
    }
  }

}
