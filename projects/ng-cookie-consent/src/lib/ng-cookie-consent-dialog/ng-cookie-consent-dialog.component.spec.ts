import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCookieConsentDialogComponent } from './ng-cookie-consent-dialog.component';

describe('NgCookieConsentDialogComponent', () => {
  let component: NgCookieConsentDialogComponent;
  let fixture: ComponentFixture<NgCookieConsentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCookieConsentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCookieConsentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
