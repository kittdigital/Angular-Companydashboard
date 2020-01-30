import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodayComponent } from './body/today/today.component';
import { MtdComponent } from './body/mtd/mtd.component';
import { HttpClientModule } from '@angular/common/http';
import { AssociatePerformanceComponent } from './body/associate-performance/associate-performance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CustomersComponent } from './body/mtd/customers/customers.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodayComponent,
    MtdComponent,
    AssociatePerformanceComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DataTablesModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
