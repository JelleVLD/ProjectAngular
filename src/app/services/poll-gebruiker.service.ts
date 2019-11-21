import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PollGebruiker } from '../models/pollGebruiker.model';
import { Observable } from 'rxjs';
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root'
})
export class PollGebruikerService {
gebruiker;
  constructor(private http: HttpClient) { 

  }
    getPollsById():Observable<PollGebruiker[]> {
      this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
      return this.http.get<PollGebruiker[]>("https://localhost:44387/api/pollgebruiker/" + this.gebruiker.gebruikerID);
    }
    nodigVriendUit(pollGebruiker:PollGebruiker):Observable<PollGebruiker> {
      return this.http.post<PollGebruiker>("https://localhost:44387/api/pollgebruiker/",pollGebruiker);
    }
    stuurMail(email:Email){
      return this.http.post<Email>("https://localhost:44387/api/gebruiker/stuurmail",email);
    }
  }

