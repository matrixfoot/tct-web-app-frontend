import { Component, OnDestroy, OnInit } from '@angular/core';

import { AffilesService } from 'src/app/services/affiles.service';
import { Subscription } from 'rxjs';
import { Adherent } from 'src/app/models/Adherent.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adherents-list',
  templateUrl: './adherents-list.component.html',
  styleUrls: ['./adherents-list.component.scss']
})
export class AdherentsListComponent implements OnInit {

  public affiles: Adherent[] = [];
  
  public loading: boolean;
  public currentrole:string;
  private affilesSub: Subscription;
  
  private currentrolesub: Subscription;
  constructor(
              private affilesService: AffilesService,
              private router: Router,
              private auth:AuthService) { }

  ngOnInit() {
    this.loading = true;
    
    this.affilesSub = this.affilesService.affiles$.subscribe(
      (affiles) => {
        this.affiles = affiles;
        this.loading = false;
      }
    );
    
    this.currentrolesub = this.auth.userrole$.subscribe(
      (currentrole) => {
        this.currentrole = currentrole;
      }
    );
    this.affilesService.getAffiles();
    this.loading = false;
  }

  
    getNavigation(link, id){
      
        this.router.navigate([link + '/' + id]);
          
      }
       
  ngOnDestroy() {
    this.affilesSub.unsubscribe();
    
  }
}
