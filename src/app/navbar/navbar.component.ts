import { Component, OnInit } from '@angular/core';
import { Gebruiker } from '../models/gebruiker.model';
import { Vriend } from '../models/vriend.model';
import { AuthenticateService } from '../services/authenticate-service.service';
import { VriendenService } from '../services/vrienden.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean;
  huidigeGebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
  constructor(public authService: AuthenticateService) {
  }
  ngOnInit() {
    this.isLoggedIn();
    
  }

  //logt de gebruiker uit via de authenticateService
  Logout() {
    this.authService.logOut();
  }

  //controleert of er een gebruiker ingelogd is via de authenticateService en zet dit in "isAuthenticated"
  isLoggedIn() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  //haalt de gebruiker op uit local storage
  haalGebruikerOp(){
    let gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return gebruiker.gebruikersnaam
  }
}
