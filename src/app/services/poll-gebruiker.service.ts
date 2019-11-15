import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PollGebruiker } from '../models/pollGebruiker.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollGebruikerService {
gebruiker;
  constructor(private http: HttpClient) { 

  }
    getPollsById():Observable<PollGebruiker[]> {
      this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
      return this.http.get<PollGebruiker[]>("https://localhost:44387/api/pollgebruiker/" + this.gebruiker.gebruikerID, {
        headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
      });
    }
    nodigVriendUit(pollGebruiker:PollGebruiker):Observable<PollGebruiker> {
      return this.http.post<PollGebruiker>("https://localhost:44387/api/pollgebruiker/",pollGebruiker, {
        headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
      });
    }
  }

