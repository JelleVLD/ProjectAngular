import { Component, OnInit } from '@angular/core';
import { GebruikerLogin } from '../models/gebruikerlogin.module';
import { AuthenticateService } from '../services/authenticate-service.service';
import { Router } from '@angular/router';
import { VriendenComponent } from '../vrienden/vrienden.component';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  submitted : boolean = false;
  model: GebruikerLogin = new GebruikerLogin('','','');
  constructor(public _authenticateService : AuthenticateService,private router: Router,public vriendencomponent: VriendenComponent) { }

  ngOnInit() {
    if (this._authenticateService.isLoggedIn()==true) {
      this.router.navigate(['/home']);
    }
  }
  navigate() {
    this.router.navigate(['/routepath']);
    }
  onSubmit() {
    this.submitted = true;
    this._authenticateService.authenticate(this.model).subscribe(result => {
      localStorage.setItem("token",result.token);
    localStorage.setItem("Gebruiker", JSON.stringify(result));
    this.router.navigate(['/home']);
    });
}
}
