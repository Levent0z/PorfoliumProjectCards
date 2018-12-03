import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexModule } from '@angular/flex-layout'

import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { CardModule } from 'primeng/card';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import AppErrorHandler from './services/appErrorHandler';
import LogService from './services/logger';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';
import { PortfoliumApiService } from './services/portfoliumApi';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectCardsComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexModule,
    ScrollDispatchModule,

    InfiniteScrollModule,

    // PrimeNG modules
    CardModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    LogService,
    PortfoliumApiService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
