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
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
   }
  getVrienden(): Observable<Vriend[]> {
    this.vrienden = this.http.get<Vriend[]>("https://localhost:44387/api/vrienden/" + this.gebruiker.gebruikerID, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
    return this.vrienden;
  }
  deleteVriend(vriendId:number): Observable<Vriend[]> {
    return this.http.delete<Vriend[]>("https://localhost:44387/api/vrienden/" + vriendId, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
  bevestigVriend(vriendId: number,vriend: Vriend): Observable<Vriend[]> {
    console.log(vriend)
    return this.http.put<Vriend[]>("https://localhost:44387/api/vrienden/" + vriendId,vriend, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
}
