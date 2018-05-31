import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from'@angular/router';
import{Ng2CarouselamosModule} from 'ng2-carouselamos'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PhamarcyComponent } from './phamarcy/phamarcy.component';
import { DrugComponent } from './phamarcy/drug/drug.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CouraselComponent } from './home/courasel/courasel.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DrugsComponent } from './phamarcy/drugs/drugs.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';


 const appRoutes:Routes=[
   {path:'',component:HomeComponent},
   {path:'phamarcy',component:PhamarcyComponent},
   {path:'invoice',component:InvoiceComponent},
   {path:'appointment',component:AppointmentComponent},
   {path:'contactUs',component:ContactUsComponent},
   {path:'login',component:LoginComponent}
 ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhamarcyComponent,
    DrugComponent,
    InvoiceComponent,
    CouraselComponent,
    HomeComponent,
    DrugsComponent,
    AppointmentComponent,
    ContactUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes ),
    Ng2CarouselamosModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
