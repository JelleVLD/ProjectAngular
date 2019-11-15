import { Component, OnInit, Input } from '@angular/core';
import { PollService } from '../services/poll.service';
import { Poll } from '../models/poll.model';

@Component({
  selector: 'app-pollinfo',
  templateUrl: './pollinfo.component.html',
  styleUrls: ['./pollinfo.component.css']
})
export class PollinfoComponent implements OnInit {
  private _pollID = null;

@Input('pollID')
set pollID(pollID: number) {
   this._pollID = pollID;
   this.haalPollOp();
}
get pollID(): number { return this._pollID; }

  gekozenPollID:number;
  poll:Poll;
  constructor(public _pollService:PollService) {
    this.gekozenPollID = this.pollID; 

  }

  ngOnInit() {
     
  }
  haalPollOp(){
    console.log(this.pollID)
    this.gekozenPollID = this.pollID;
    this._pollService.getPollsById(this.gekozenPollID).subscribe(
      result => {
        this.poll=result;
        console.log(result)
      }
    );
  }

}
