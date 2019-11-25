import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gebruiker } from '../models/gebruiker.model'; 
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GebruikerService {
  constructor(private http: HttpClient) { }

  //haalt alle gebruikers op en returned deze
  getGebruikers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>("https://localhost:44387/api/gebruiker");
}
}
