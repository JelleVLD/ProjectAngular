import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gebruiker } from '../models/gebruiker.model';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from '../services/authenticate-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted : boolean = false;
  constructor(private _httpClient: HttpClient,private router: Router,private _snackbar:MatSnackBar) { }
  model: Gebruiker = new Gebruiker(undefined,'','','','');
  controleWachtwoord:string;
  ngOnInit() {
  }
  navigate() {
    this.router.navigate(['/routepath']);
    }

    //bij het submitten van het formulier post hij de nieuwe gebruiker in de API en zet meteen ook de gegevens in localstorage waarna hij naar de pollscomponent navigeert
  onSubmit() {
    if(this.model.wachtWoord == this.controleWachtwoord){
      this.submitted = true;
      this._httpClient.post<Gebruiker>("https://localhost:44387/api/Gebruiker", this.model).subscribe(result=>{
        this.router.navigate(['/login']);
    });
    }else{
      this._snackbar.open("Wachtwoord is niet 2x hetzelfde!","Terug");
    }
  }
}
