
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
const routes: Routes = [
  
  
    { path: 'default', component: DefaultComponent },
    {path: 'connexion', component: ConnexionComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'enregistrement', component: EnregistrementComponent},
    {path: 'users', component: UsersListComponent},
    { path: '', pathMatch: 'full', component: DefaultComponent },
  { path: '**', redirectTo: '' }
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