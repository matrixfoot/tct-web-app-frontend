import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              
              private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return Observable.create(
      (observer) => {
        this.auth.isAuth$.subscribe(
          (auth) => {
            
                    this.router.navigate(['connexion']);
                  
            observer.next(true);
          }
        );
      }
    );
  }
}
