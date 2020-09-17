import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  token: string;
  userId: string;
  
  public userrole$ = new BehaviorSubject<string>('');
  

  constructor(private router: Router,
              private http: HttpClient) {}
              connexion(email: string, password: string) {
                return new Promise((resolve, reject) => {
                  this.http.post(
                    'https://backendmanagementapp.herokuapp.com/api/auth/login',
                    { email: email, password: password })
                    .subscribe(
                      (authData: {  role:string,accessToken: string, userId: string }) => {
                        this.token = authData.accessToken;
                        this.userId = authData.userId;
                        this.userrole$.next(authData.role);
                        
              
                        this.isAuth$.next(true);
                        
                        resolve();
                      },
                      (error) => {
                        reject(error);
                      }
                    );
                });
              }
  
            }