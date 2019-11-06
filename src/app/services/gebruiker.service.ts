import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gebruiker } from '../models/gebruiker.model'; 
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GebruikerService {
  constructor(private http: HttpClient) { }
  getGebruikers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>("https://localhost:44387/api/gebruiker", {
    headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
}
getGebruikersVanVrienden(id): Observable<Gebruiker[]> {
  return this.http.get<Gebruiker[]>("https://localhost:44387/api/gebruiker/", {
  headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token")),
  params: new HttpParams().set("id",id)
  });
}
}
