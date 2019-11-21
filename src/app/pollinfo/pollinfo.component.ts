import { Component, OnInit, Input } from '@angular/core';
import { PollService } from '../services/poll.service';
import { Poll } from '../models/poll.model';
import { Stem } from '../models/stem.model';
import { StemService } from '../services/stem.service';
import { Antwoord } from '../models/antwoord.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pollinfo',
  templateUrl: './pollinfo.component.html',
  styleUrls: ['./pollinfo.component.css']
})
export class PollinfoComponent implements OnInit {
  private _pollID = null;
  huidigeGebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
@Input()gemaakt:boolean
@Input('pollID')
set pollID(pollID: number) {
   this._pollID = pollID;
   this.haalPollOp();
}
get pollID(): number { return this._pollID; }

  gekozenPollID:number;
  poll:Poll;
  reedsGestemd=[];
  constructor(public _pollService:PollService, private router: Router,public _stemService:StemService) {
    this.gekozenPollID = this.pollID; 

  }

  ngOnInit() {
     
  }
  haalPollOp(){
    
this.reedsGestemd = [];
    this.gekozenPollID = this.pollID;
    this._pollService.getPollsById(this.gekozenPollID).subscribe(
      result => {
        console.log(result)
        this.poll=result;        
  const huidigeGebruiker = this.huidigeGebruiker;
        this.poll.antwoorden.forEach(antwoord => {
          if(antwoord.stemmen.find(function(el){return el.gebruikerID === huidigeGebruiker.gebruikerID})!=undefined)
            {
            this.reedsGestemd.push(antwoord.stemmen.find(
              function(el) {
              return el.gebruikerID === huidigeGebruiker.gebruikerID
              }
            ).antwoordID)
          }
        });
        
      }
    );
  }
plaatsStem(id){
  const stem =new Stem(0,id,this.huidigeGebruiker.gebruikerID,null);
  this._stemService.nieuweStem(stem).subscribe(
    result => {
      this.haalPollOp();
    }
  );
}
verwijderStem(id){
  this._stemService.getStemmen().subscribe(
    result => {
      let verwijderStem =null;
      result.forEach(stem => {
        if(stem.antwoordID==id && stem.gebruikerID ==this.huidigeGebruiker.gebruikerID ){
          verwijderStem=stem.stemID
        }
      });
      this._stemService.verwijderStem(verwijderStem).subscribe(
        result => {
          this.haalPollOp();
        }
      );
    }
  );
}
}
