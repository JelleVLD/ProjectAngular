import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gebruiker } from '../models/gebruiker.model';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from '../services/authenticate-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted : boolean = false;
  constructor(private _authenticateService : AuthenticateService,private _httpClient: HttpClient,private router: Router) { }
  model: Gebruiker = new Gebruiker(undefined,'','','','');
  ngOnInit() {
  }
  navigate() {
    this.router.navigate(['/routepath']);
    }

    //bij het submitten van het formulier post hij de nieuwe gebruiker in de API en zet meteen ook de gegevens in localstorage waarna hij naar de pollscomponent navigeert
  onSubmit() {
    this.submitted = true;
    this._httpClient.post<Gebruiker>("https://localhost:44387/api/Gebruiker", this.model).subscribe();
    this._authenticateService.authenticate(this.model).subscribe(result => {
      localStorage.setItem("token",result.token);
      localStorage.setItem("Gebruiker", JSON.stringify(result));
      this.router.navigate(['/polls']);
      });
  }
}
