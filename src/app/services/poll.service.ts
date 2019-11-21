import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {
gebruiker;

  constructor(private http: HttpClient) { }
  getPollsById(id):Observable<Poll> {
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return this.http.get<Poll>("https://localhost:44387/api/poll/"+id);
  }
  nieuwePoll(poll: Poll):Observable<Poll> {
    this.gebruiker = JSON.parse(localStorage.getItem("Gebruiker"));
    return this.http.post<Poll>("https://localhost:44387/api/poll/",poll);
  }
}
