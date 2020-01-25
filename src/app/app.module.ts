import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodayComponent } from './body/today/today.component';
import { MtdComponent } from './body/mtd/mtd.component';
import { HttpClientModule } from '@angular/common/http';
import { AssociatePerformanceComponent } from './body/associate-performance/associate-performance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodayComponent,
    MtdComponent,
    AssociatePerformanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
