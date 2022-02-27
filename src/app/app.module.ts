import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EventsModule } from './events/events.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './shared/header/header.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    LandingpageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    EventsModule,
    DashboardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
