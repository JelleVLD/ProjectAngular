import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Gebruiker } from '../models/gebruiker.model';

import { Observable } from 'rxjs';

import { GebruikerLogin } from '../models/gebruikerlogin.module';
import { Router } from '@angular/router';



@Injectable({

  providedIn: 'root'

})

export class AuthenticateService {
  isLoggedin: boolean = false;
  constructor(private _httpClient: HttpClient,private router: Router) { }

  authenticate(GebruikerLogin: GebruikerLogin): Observable<Gebruiker> {

    return this._httpClient.post<Gebruiker>("https://localhost:44387/api/Gebruiker/authenticate", GebruikerLogin);

  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('Gebruiker');
    this.isLoggedin = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    if (localStorage.getItem("token") == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
    else {
      this.isLoggedin = true;
      return true;
    }
  }
}