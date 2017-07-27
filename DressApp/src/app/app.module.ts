import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegistrationService } from './registration.service';
import { GetdressService } from './getdress.service';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './landing/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SingledressComponent } from './singledress/singledress.component';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { SearchPipe } from './search.pipe';
import { NewDressComponent } from './new-dress/new-dress.component';

const routes: Routes = [
  {path: "",pathMatch: 'full', component: LandingComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "register", component: RegisterComponent},
  {path: "about", component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    DashboardComponent,
    AboutComponent,
    DeliveryComponent,
    SingledressComponent,
    SearchPipe,
    NewDressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [RegistrationService, GetdressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
