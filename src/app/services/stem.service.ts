import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stem } from '../models/stem.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StemService {
gebruiker;
  constructor(private http: HttpClient) { }

  nieuweStem(stem:Stem):Observable<Stem> {
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return this.http.post<Stem>("https://localhost:44387/api/stem/",stem);
  }
  verwijderStem(id):Observable<Stem> {
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return this.http.delete<Stem>("https://localhost:44387/api/stem/"+id);
  }

  getStemmen():Observable<Stem[]> {
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return this.http.get<Stem[]>("https://localhost:44387/api/stem/");
  }
}
