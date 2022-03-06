import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { EventsModule } from './events/events.module';
import { DashboardModule } from './dashboard/dashboard.module';
<<<<<<< HEAD
import { GroupsModule } from './groups/groups.module';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainHomeModule } from './main-home/main-home.module';
import { SettingsModule } from './settings/settings.module';
=======
import { MainHomeModule } from './main-home/main-home.module';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginRegisterModule } from './login-register/login-register.module';
import { HttpClientModule } from '@angular/common/http';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersModule } from './suppliers/suppliers.module';
import { SettingsModule } from './settings/settings.module';
import { MenuModule } from './menu/menu.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HeaderComponent,
    SuppliersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GroupsModule,
    EventsModule,
    DashboardModule,
<<<<<<< HEAD
    MainHomeModule,
    SettingsModule,
=======
    LoginRegisterModule,
    SuppliersModule,
    HttpClientModule,
    MainHomeModule,
    NgbModule,
    MenuModule,
    SettingsModule
>>>>>>> master

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }