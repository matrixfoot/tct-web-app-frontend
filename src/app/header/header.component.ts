import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  
  public isAuth: boolean;
  public currentrole:string;
  
  

  
  private currentrolesub: Subscription;
  
  private isAuthSub: Subscription;

  constructor(
              private auth: AuthService,
              private router: Router,
              ) { }

  ngOnInit() {
   
    this.currentrolesub = this.auth.userrole$.subscribe(
      (currentrole) => {
        this.currentrole = currentrole;
      }
    );
    
    this.isAuthSub = this.auth.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
       
      }
    );
    
    
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate([ 'connexion']);
  }
  
  onBackToParts() {
    this.router.navigate(['default']);
  }

  ngOnDestroy() {
   
    this.isAuthSub.unsubscribe();
  }

}
