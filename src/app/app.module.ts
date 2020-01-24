import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingshowComponent } from './billingshow/billingshow.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    BillingshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
