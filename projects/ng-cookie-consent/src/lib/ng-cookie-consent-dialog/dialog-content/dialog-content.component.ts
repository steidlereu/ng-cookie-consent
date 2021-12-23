import { Component, Input, OnInit } from '@angular/core';
import { NgCookieConsentConfig } from '../../ng-cookie-consent-config';

@Component({
  selector: 'lib-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  @Input() config: NgCookieConsentConfig | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
