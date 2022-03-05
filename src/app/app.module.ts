import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { EventsModule } from './events/events.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainHomeModule } from './main-home/main-home.module';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginRegisterModule } from './login-register/login-register.module';
import { HttpClientModule } from '@angular/common/http';

import { MainHomeModule } from './main-home/main-home.module';
import { SettingsComponent } from './settings/settings.component';
import { ForgotPasswordComponent } from './login-register/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    LandingpageComponent,
    HeaderComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EventsModule,
    DashboardModule,
    LoginRegisterModule,
    HttpClientModule,
    MainHomeModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
