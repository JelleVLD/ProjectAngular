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
  Logout() {
    this.authService.logOut();
  }
  isLoggedIn() {
    this.isAuthenticated = this.authService.isLoggedIn();
    if(this.isAuthenticated == true){
      
    }
    
  }
  haalGebruikerOp(){
    let gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return gebruiker.gebruikersnaam
  }
}
