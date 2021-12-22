import { Component, OnInit } from '@angular/core';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'lib-ng-cookie-consent-dialog',
  templateUrl: './ng-cookie-consent-dialog.component.html',
  styleUrls: ['./ng-cookie-consent-dialog.component.css']
})
export class NgCookieConsentDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
