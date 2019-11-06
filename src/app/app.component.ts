import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from "./services/authenticate-service.service";
import { Gebruiker } from './models/gebruiker.model';
import { VriendenService } from './services/vrienden.service';
import { Vriend } from './models/vriend.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'pollAppster';
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
    this.haalVriendenOp();
  }
  clearNotifCount() {
    this.notificationCount = 0;
  }
  clearFriendCount() {
    this.friendCount = 0;
  }
  haalVriendenOp(){
    this.verzoeken=[];
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
