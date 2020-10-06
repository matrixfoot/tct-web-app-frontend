import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/users.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public loading: boolean;
  public users: User[] = [];
  private usersSub: Subscription;
  errormsg:string;
  

  constructor(
              private UserService: UserService,
              private router: Router) { }
              ngOnInit() {
                this.loading = true;
                
                this.usersSub = this.UserService.users$.subscribe(
                  (users) => {
                    this.users = users;
                    this.loading = false;
                  },
                  (error) => {
                    this.loading = false;
                    console.log(error);
                    this.errormsg=error.message;
                  }
                );
               
                this.UserService.getAll();
                this.loading=false;
              }
              
  

  
    getNavigation(link, id){
      
        this.router.navigate([link + '/' + id]);
          
      }
  

}
