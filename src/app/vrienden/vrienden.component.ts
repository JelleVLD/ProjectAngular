import { Component, OnInit, Input, Inject } from '@angular/core';
import { AuthenticateService } from '../services/authenticate-service.service';
import { Router } from '@angular/router';
import { Gebruiker } from '../models/gebruiker.model';
import { VriendenService } from '../services/vrienden.service';
import { Vriend } from '../models/vriend.model';
import { GebruikerService } from '../services/gebruiker.service';

@Component({
  selector: 'app-vrienden',
  templateUrl: './vrienden.component.html',
  styleUrls: ['./vrienden.component.css']
})
export class VriendenComponent implements OnInit {
  huidigeGebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
  alleGebruikers: Gebruiker[] = [];
  gebruikers: Vriend[] = [];
  vrienden: Gebruiker[] = [];
  verzoeken: Gebruiker[] = [];
  verzondenVerzoeken: Gebruiker[] = [];
  triggered: Boolean = false;
  geenOnbekenden:number[]=[];


  constructor(public authService: AuthenticateService, private router: Router, private _vriendenService: VriendenService, public _gebruikerService: GebruikerService) {

      this._gebruikerService.getGebruikers().subscribe(
        result => {
          result.forEach(gebruiker => {
              if (gebruiker.gebruikerID != this.huidigeGebruiker.gebruikerID) {

                this.alleGebruikers.push(gebruiker);

        
        }
      }
      );
    });
}

  ngOnInit() {
    if (this.authService.isLoggedIn() != true) {
      this.router.navigate(['/login']);
    }
    this.haalVriendenOp();
    this.huidigeGebruiker = JSON.parse(localStorage.getItem("Gebruiker"));

  }
  stuurVerzoek(gebruikerId){
    let vriend= new Vriend(0,this.huidigeGebruiker.gebruikerID,gebruikerId,false,null,null)
    this._vriendenService.maakVerzoek(vriend).subscribe(
      result => {
        this.haalVriendenOp();
      }

    );
  }
  openGebruikersScherm() {
    if(this.triggered===true){
      this.triggered= false;
    }else{
      this.triggered = true;

    }
  }
  vriendenVerzoeken() {
    return this.verzoeken;
  }
  verwijderVriend(gebruikerId) {

    this._vriendenService.getVrienden().subscribe(
      result => {
        result.forEach(vriend => {
          if (vriend.zender.gebruikerID == gebruikerId && vriend.ontvanger.gebruikerID == this.huidigeGebruiker.gebruikerID) {
            this._vriendenService.deleteVriend(vriend.vriendenID).subscribe(() => {
              this.haalVriendenOp();
            });

          } else if (vriend.ontvanger.gebruikerID == gebruikerId && vriend.zender.gebruikerID == this.huidigeGebruiker.gebruikerID) {
            this._vriendenService.deleteVriend(vriend.vriendenID).subscribe(() => {
              this.haalVriendenOp();
            });

          }
        });

      }

    );

  }

  toevoegenVriend(gebruikerId) {
    this._vriendenService.getVrienden().subscribe(
      result => {
        result.forEach(vriend => {
          if (vriend.zender.gebruikerID == gebruikerId && vriend.ontvanger.gebruikerID == this.huidigeGebruiker.gebruikerID) {
            vriend.bevestigd = true;
            this._vriendenService.bevestigVriend(vriend.vriendenID, vriend).subscribe(() => {
              this.haalVriendenOp();
            });

          } else if (vriend.ontvanger.gebruikerID == gebruikerId && vriend.zender.gebruikerID == this.huidigeGebruiker.gebruikerID) {
            vriend.bevestigd = true;
            this._vriendenService.bevestigVriend(vriend.vriendenID, vriend).subscribe(() => {
              this.haalVriendenOp();
            });

          }
        });

      }

    );
  }
  haalVriendenOp() {
    this.vrienden = [];
    this.verzondenVerzoeken = [];
    this.verzoeken = [];
    this._vriendenService.getVrienden().subscribe(
      result => {
        this.gebruikers = result;
        this.gebruikers.forEach(vriend => {
          if (vriend.bevestigd == true) {
            if (vriend.zender.gebruikerID == this.huidigeGebruiker.gebruikerID) {
              this.vrienden.push(vriend.ontvanger);
              this.geenOnbekenden.push(vriend.ontvanger.gebruikerID)
            } else {

              this.vrienden.push(vriend.zender);
              this.geenOnbekenden.push(vriend.zender.gebruikerID)
              
            }
          } else if (vriend.zender.gebruikerID == this.huidigeGebruiker.gebruikerID) {
            this.verzondenVerzoeken.push(vriend.ontvanger);
            this.geenOnbekenden.push(vriend.ontvanger.gebruikerID)
          } else {
            this.verzoeken.push(vriend.zender);
            this.geenOnbekenden.push(vriend.zender.gebruikerID)
          }
        });
      }
    );
  }
}
