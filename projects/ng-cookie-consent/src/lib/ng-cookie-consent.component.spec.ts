import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCookieConsentComponent } from './ng-cookie-consent.component';

describe('NgCookieConsentComponent', () => {
  let component: NgCookieConsentComponent;
  let fixture: ComponentFixture<NgCookieConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCookieConsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCookieConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
