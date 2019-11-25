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
  //haalt alle pollgebruikers op die horen bij de id van de huidige gebruiker en returned deze
    getPollsById():Observable<PollGebruiker[]> {
      this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
      return this.http.get<PollGebruiker[]>("https://localhost:44387/api/pollgebruiker/" + this.gebruiker.gebruikerID);
    }
    //post een nieuwe pollgebruikerRelatie en returned deze
    nodigVriendUit(pollGebruiker:PollGebruiker):Observable<PollGebruiker> {
      return this.http.post<PollGebruiker>("https://localhost:44387/api/pollgebruiker/",pollGebruiker);
    }
    //stuurt een mail via de API naar het meegegeven emailAdres
    stuurMail(email:Email){
      return this.http.post<Email>("https://localhost:44387/api/gebruiker/stuurmail",email);
    }
    //verwijdert alle gebruikers die bij de meegegeven pollID horen uit de API.
    verwijderGebruikersBijPoll(id){
      return this.http.delete("https://localhost:44387/api/pollgebruiker/"+id);
    }
  }

