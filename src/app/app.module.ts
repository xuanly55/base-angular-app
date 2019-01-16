import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { PapaParseModule } from 'ngx-papaparse';

import {
  BsDropdownModule,
  // TabsModule,
  // ButtonsModule,
  // PopoverModule,
  // AlertModule,
  // ModalModule
} from 'ngx-bootstrap';

import { AppComponent } from './app.component';

import { AppService } from './app.service';
import { AppUtilsService } from './app-utils.service';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppSigninComponent } from './app-signin/app-signin.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppSwipeComponent } from './app-swipe/app-swipe.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppSigninComponent,
    AppMainComponent,
    AppSwipeComponent,
    AppSettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PapaParseModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    AppService,
    AppUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
