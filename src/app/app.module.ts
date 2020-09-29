import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './header/header.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { NewInscriptionComponent } from './dashboard/new-inscription/new-inscription.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { AdherentsListComponent } from './dashboard/adherents-list/adherents-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    
   
    DashboardComponent,
    NewInscriptionComponent,
    UsersListComponent,
    AdherentsListComponent,
    ConnexionComponent,
    EnregistrementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
