import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Vriend } from '../models/vriend.model';
import { VriendenService } from '../services/vrienden.service';
import { Gebruiker } from '../models/gebruiker.model';
import { Poll } from '../models/poll.model';
import { MatSelectChange, MatOption } from '@angular/material';
import { PollService } from '../services/poll.service';
import { Antwoord } from '../models/antwoord.model';
import { AntwoordService } from '../services/antwoord.service';
import { Router } from '@angular/router';
import { PollGebruikerService } from '../services/poll-gebruiker.service';
import { PollGebruiker } from '../models/pollGebruiker.model';

@Component({
  selector: 'app-nieuwepoll',
  templateUrl: './nieuwepoll.component.html',
  styleUrls: ['./nieuwepoll.component.css']
})
export class NieuwepollComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  vrienden: Gebruiker[] = [];
  huidigeGebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
  poll:Poll = new Poll(0,'',null);
  antwoord:string;
  submitted : boolean = false;
  geselecteerdeVrienden=[];

  constructor(private _formBuilder: FormBuilder, public _vriendenService:VriendenService, public _pollService:PollService, public _antwoordService: AntwoordService,public _pollGebruikerService:PollGebruikerService,private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.haalVriendenOp();
    
  }
  onSubmit() {
    this.submitted = true;
    let antwoorden = this.antwoord.split(',')
    let poll;
    this._pollService.nieuwePoll(this.poll).subscribe(
      result => { 
        poll=result;
        antwoorden.forEach(antwrd => {

      let pollAntwoord = new Antwoord(0,antwrd,result.pollID,null)
      this._antwoordService.nieuwAntwoord(pollAntwoord).subscribe(
        result=>{ });
        });
        
      let pollMaker = new PollGebruiker(0,poll.pollID,this.huidigeGebruiker.gebruikerID,true,null,null)
      this._pollGebruikerService.nodigVriendUit(pollMaker).subscribe(
        result =>{});

      this.geselecteerdeVrienden.forEach(vriend=>{
        let pollGebruiker = new PollGebruiker(0,poll.pollID,vriend,false,null,null);
    this._pollGebruikerService.nodigVriendUit(pollGebruiker).subscribe(
      result =>{});
      
      });
console.log(this.geselecteerdeVrienden)
this.router.navigate(['/polls']);
      }
    );
    
    
    }
  haalVriendenOp() {
    this.vrienden = [];
    this._vriendenService.getVrienden().subscribe(
      result => {-
        result.forEach(vriend => {
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
  selected(event:MatSelectChange){
    this.geselecteerdeVrienden =event.source.value
  }
terugKnop(){
  this.router.navigate(['/polls']);
}
  sync(bool, item){
  if(bool){
    // add item
    this.geselecteerdeVrienden.push(item);
  } else {
    // remove item
    for(var i=0 ; i < this.geselecteerdeVrienden.length; i++) {
      if(this.geselecteerdeVrienden[i].gebruikerID == item.gebruikerID){
        this.geselecteerdeVrienden.splice(i,1);
      }
    }      
  }
};

}
