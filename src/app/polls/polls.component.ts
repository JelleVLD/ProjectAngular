import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate-service.service';
import { Router } from '@angular/router';
import { PollGebruiker } from '../models/pollGebruiker.model';
import { PollGebruikerService } from '../services/poll-gebruiker.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
polls:PollGebruiker[]=[];
vriendenpolls:PollGebruiker[]=[];
gekozenPollID:number;
  constructor(public authService: AuthenticateService, private router: Router ,public _pollGebruikerService: PollGebruikerService) {
    this.haalPollsOp();
   }

  ngOnInit() {
    if (this.authService.isLoggedIn() != true) {
      this.router.navigate(['/login']);
    }
  }
  nieuwePoll(){
    this.router.navigate(['/nieuwePoll'])
  }
haalPollsOp(){
  this._pollGebruikerService.getPollsById().subscribe(
    result => {
      result.forEach(pollGebruiker => {
        if(pollGebruiker.hasCreated == true && pollGebruiker.gebruiker){
          this.polls.push(pollGebruiker);
        }else{
          if(pollGebruiker.hasCreated == false && pollGebruiker.gebruiker){
            this.vriendenpolls.push(pollGebruiker);
          }
        }
      });
    
    }
  
  );
}
haalPollInfoOp( pollID){
  this.gekozenPollID=pollID 
}
}
