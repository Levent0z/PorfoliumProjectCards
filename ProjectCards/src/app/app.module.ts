import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { CardModule } from 'primeng/card';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import AppErrorHandler from './services/appErrorHandler';
import LogService from './services/logger';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';
import { PortfoliumApiService } from './services/portfoliumApi';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectCardsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // PrimeNG modules
    CardModule,
    VirtualScrollerModule
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
