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

  //controleert of de gegeven login overeenkomt met een gebruiker in de API
  authenticate(GebruikerLogin: GebruikerLogin): Observable<Gebruiker> {
    return this._httpClient.post<Gebruiker>("https://localhost:44387/api/Gebruiker/authenticate", GebruikerLogin);


  }
  //verwijdert de gegevens van de ingelogde gebruiker uit local storage en navigeert naar de login component
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('Gebruiker');
    this.isLoggedin = false;
    this.router.navigate(['/login']);
  }
//checked of er iemand ingelogd is en returned het antwoord (true/false)
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