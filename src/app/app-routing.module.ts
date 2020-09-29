
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
const routes: Routes = [
  
  
    { path: 'default', component: DefaultComponent },
    {path: 'connexion', component: ConnexionComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'enregistrement', component: EnregistrementComponent},
  ];
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    
  })
  export class AppRoutingModule {}