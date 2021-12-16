import { ApplicationRef, DoBootstrap, Inject, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(AppComponent, {injector});
    customElements.define('ng-cookie-consent', webComponent);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    throw new Error('Method not implemented.');
  }

}

