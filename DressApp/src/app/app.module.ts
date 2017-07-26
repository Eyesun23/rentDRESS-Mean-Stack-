import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RegistrationService} from './registration.service';
import { GetdressService } from './getdress.service';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './landing/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SingledressComponent } from './singledress/singledress.component';
import { Routes, RouterModule} from '@angular/router';
const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    DashboardComponent,
    AboutComponent,
    DeliveryComponent,
    SingledressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RegistrationService, GetdressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
