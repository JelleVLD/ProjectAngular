import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Vriend } from '../models/vriend.model';
import { GebruikerService } from './gebruiker.service';
@Injectable({
  providedIn: 'root'
})
export class VriendenService {
  gebruiker;
  vrienden;

  constructor(private http: HttpClient, _gebruikersService: GebruikerService) {
   
   }
   //haalt alle vrienden op van de huidige gebruiker en returned deze
  getVrienden(): Observable<Vriend[]> {
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    this.vrienden = this.http.get<Vriend[]>("https://localhost:44387/api/vrienden/" + this.gebruiker.gebruikerID, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
    return this.vrienden;
  }
  //delete de vriendenRelatie tussen de huidige gebruiker en de vriend uit de API.
  deleteVriend(vriendId:number): Observable<Vriend[]> {
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return this.http.delete<Vriend[]>("https://localhost:44387/api/vrienden/" + vriendId);
  }
  //bevestigd de vriendenRelatie tusen huidige gebruiker en de vriend in de API.
  bevestigVriend(vriendId: number,vriend: Vriend): Observable<Vriend[]> {
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return this.http.put<Vriend[]>("https://localhost:44387/api/vrienden/" + vriendId,vriend);
  }
  //stuurt een vriendschapsVerzoek van de huidige gebruiker en de gekozen gebruiker en zet deze in de API
  maakVerzoek(vriend:Vriend): Observable<Vriend[]> {
    return this.http.post<Vriend[]>("https://localhost:44387/api/vrienden/",vriend);
  }
}
