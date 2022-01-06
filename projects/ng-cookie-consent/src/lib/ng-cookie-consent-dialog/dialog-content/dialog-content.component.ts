import { Component, Input, OnInit } from '@angular/core';
import { NgCookieConsentConfig } from '../../ng-cookie-consent-config';
import { NgCookieConsentService } from '../../ng-cookie-consent.service';

@Component({
  selector: 'lib-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  config: NgCookieConsentConfig | undefined;
  settingsDialog = false;

  constructor(public ngCookieConsentService: NgCookieConsentService) {}

  ngOnInit(): void {
    this.ngCookieConsentService.getConfigSub().subscribe(
      config => {
        this.config = config;
      }
    );
  }

  changeDialog(settingsDialog: boolean): void {
    this.settingsDialog = settingsDialog;
  }
}
