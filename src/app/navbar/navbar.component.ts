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
  friendCount: number;
  notificationCount: number;
  verzoeken: Gebruiker[] = [];
  gebruikers: Vriend[] = [];
  huidigeGebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
  constructor(public authService: AuthenticateService, public _vriendenService: VriendenService) {
    this.friendCount = this.verzoeken.length;
    this.notificationCount = 7;
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

      this.haalVriendenOp();
    }
  }
  clearNotifCount() {
    this.notificationCount = 0;
  }
  clearFriendCount() {
    this.friendCount = 0;
  }
  haalVriendenOp() {
    this.verzoeken = [];
    this._vriendenService.getVrienden().subscribe(
      result => {
        this.gebruikers = result;
        this.gebruikers.forEach(vriend => {
          if (vriend.bevestigd == false && vriend.zender.gebruikerID != this.huidigeGebruiker.gebruikerID) {
            this.verzoeken.push(vriend.zender)
          }
        });
      }
    );
  }

}
