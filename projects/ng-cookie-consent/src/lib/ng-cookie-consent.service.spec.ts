import { TestBed } from '@angular/core/testing';

import { NgCookieConsentService } from './ng-cookie-consent.service';

describe('NgCookieConsentService', () => {
  let service: NgCookieConsentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCookieConsentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
