import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridComponent } from './ag-grid/ag-grid.component';

@NgModule({
  declarations: [
    AgGridComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
  ],
  entryComponents: [AgGridComponent],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(AgGridComponent, {injector});
    customElements.define('ag-grid-component', webComponent);
  }

  ngDoBootstrap() {}
 }
