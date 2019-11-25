import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Antwoord } from '../models/antwoord.model';

@Injectable({
  providedIn: 'root'
})
export class AntwoordService {
  gebruiker;

  constructor(private http: HttpClient) { }

  //post het nieuwe antwoord in de API
  nieuwAntwoord(antwoord : Antwoord):Observable<Antwoord> {
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return this.http.post<Antwoord>("https://localhost:44387/api/antwoord/",antwoord);
  }
}
