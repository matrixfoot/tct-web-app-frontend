import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Adherent } from '../models/Adherent.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffilesService {

  constructor(private http: HttpClient) {}

  private affiles: Adherent[] = [
    
  ];
  public affiles$ = new Subject<Adherent[]>();

  getAffiles() {
    this.http.get('https://tct-web-app-backend.herokuapp.com/api/affiles').subscribe(
      (affiles: Adherent[]) => {
        if (affiles) {
          this.affiles = affiles;
          this.emitAffiles();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitAffiles() {
    this.affiles$.next(this.affiles);
  }

  getAdherentById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('https://tct-web-app-backend.herokuapp.com/api/affiles/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  

  createNewAdherentWithFile(adherent: Adherent, image: File) {
    return new Promise((resolve, reject) => {
      const adherentData = new FormData();
      adherentData.append('adherent', JSON.stringify(adherent));
      adherentData.append('image', image, adherent.Nomprenom);
      this.http.post('https://tct-web-app-backend.herokuapp.com/api/affiles', adherentData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

 

  modifyAdherentWithFile(id: string, adherent: Adherent, image: File | string) {
    return new Promise((resolve, reject) => {
      let adherentData: Adherent | FormData;
      if (typeof image === 'string') {
        adherent.ficheUrl = image;
        adherentData = adherent;
      } else {
        adherentData = new FormData();
        adherentData.append('adherent', JSON.stringify(adherent));
        adherentData.append('image', image, adherent.Nomprenom);
      }
      this.http.put('https://tct-web-app-backend.herokuapp.com/api/affiles/' + id, adherentData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteAdherent(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('https://tct-web-app-backend.herokuapp.com/api/affiles/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
