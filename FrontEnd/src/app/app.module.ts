import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FetchAllComponent } from './view/fetch-all/fetch-all.component';
import { AppRoutingModule } from './/app-routing.module';
import {CustomerService} from './service/customer.service';
import {HttpClientModule} from '@angular/common/http';
import { SaveCustomerComponent } from './view/save-customer/save-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchAllComponent,
    SaveCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
