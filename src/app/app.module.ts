import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  BalCoreModule,
  BalButtonModule,
  BalHeadingModule,
  BalFooterModule,
  BalAccordionModule,
} from '@baloise/design-system-components-angular';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [AppComponent, AccordionComponent],
  imports: [
    BrowserModule,
    CommonModule,
    // Enables the usage of ngModel on form components
    FormsModule,
    ReactiveFormsModule,
    // Enables the Design System globally for your application
    BalCoreModule.forRoot(),
    // Import the Design System components
    BalButtonModule,
    BalHeadingModule,
    BalFooterModule,
    BalAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // To enable the usage of Web Components inside the Angular templates.
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
