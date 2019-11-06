import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate-service.service';
import { Router } from '@angular/router';
import { Gebruiker } from '../models/gebruiker.model';
import { VriendenService } from '../services/vrienden.service';
import { Vriend } from '../models/vriend.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vrienden: Gebruiker[] = [];
  huidigeGebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
  gebruikers: Vriend[] = [];
  constructor(public authService: AuthenticateService, private router: Router,public _vriendenService: VriendenService) {
    this.haalVriendenOp();
   }

  ngOnInit() {
    if (this.authService.isLoggedIn() != true) {
      this.router.navigate(['/login']);
    }
  }
  haalVriendenOp(){
    this.vrienden =[];
    this._vriendenService.getVrienden().subscribe(
      result => {
        this.gebruikers = result;
        this.gebruikers.forEach(vriend => {
          if (vriend.bevestigd == true) {
            if (vriend.zender.gebruikerID == this.huidigeGebruiker.gebruikerID) {
              this.vrienden.push(vriend.ontvanger);
            } else {
              this.vrienden.push(vriend.zender);
            }
          } 
        });
      }
    );
  }
}
