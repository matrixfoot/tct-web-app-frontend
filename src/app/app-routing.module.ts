import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { ConnexionComponent } from './connexion/connexion.component';
const routes: Routes = [
  
  
    { path: 'default', component: DefaultComponent },
    {path: 'connexion', component: ConnexionComponent}
    
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